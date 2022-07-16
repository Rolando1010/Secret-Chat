const { DataTypes } = require("sequelize");
const { sequelize, id, modelOptions } = require(".");
const { User, getUserByAuthtoken, getUserById } = require("./user");
const { createAccessToken } = require("../services/chat");

const Conversation = sequelize.define("Conversation", {
    id,
    name: DataTypes.STRING,
    administratorId: DataTypes.INTEGER
}, modelOptions);

const UsersInConversation = sequelize.define("UsersInConversation", {
    id,
    userId: DataTypes.INTEGER,
    conversationId: DataTypes.INTEGER
}, modelOptions);

Conversation.sync();
UsersInConversation.sync();

const joinUserToConversation = async (authtoken, conversationName) => {
    const conversation = await Conversation.findOne({where: {name: conversationName}});
    const user = await getUserByAuthtoken(authtoken);
    if(conversation) {
        const userInCoversationData = {userId: user.id, conversationId: conversation.id};
        const userInConversation = await UsersInConversation.findOne({where: userInCoversationData});
        if(!userInConversation) await UsersInConversation.create(userInCoversationData);
        const administrator = await getUserById(conversation.administratorId);
        const accesstoken = createAccessToken(administrator.username);
        return accesstoken;
    }
    const newConversation = await Conversation.create({name: conversationName, administratorId: user.id});
    await UsersInConversation.create({userId: user.id, conversationId: newConversation.id});
    const accesstoken = createAccessToken(user.username);
    return accesstoken;
}

const conversationsUserByAuthtoken = async (authtoken) => {
    const user = await getUserByAuthtoken(authtoken);
    const conversationsUser = await UsersInConversation.findAll({where: {userId: user.id}});
    const conversationsUserIds = conversationsUser.map(cu => cu.conversationId);
    const conversations = await Conversation.findAll({attributes: ["name", "administratorId"], where: {id: conversationsUserIds}});
    return await Promise.all(conversations.map(async ({ name, administratorId }) => {
        const administrator = (await getUserById(administratorId)).username;
        return { name, administrator };
    }));
}

const accesstokenUserByAuthtoken = async (authtoken) => {
    const { username } = await getUserByAuthtoken(authtoken);
    const accesstoken = createAccessToken(username);
    return accesstoken;
}

const getMembersConversationByName = async (conversationName) => {
    const conversation = await Conversation.findOne({where: {name: conversationName}});
    const membersConversation = await UsersInConversation.findAll({where: {conversationId: conversation.id}});
    const membersIds = membersConversation.map(member => member.id);
    const members = await User.findAll({attributes: ["username"], where: {id: membersIds}});
    return members;
}

const getConversationAdministrator = async (conversationName) => {
    const conversation = await Conversation.findOne({where: {name: conversationName}});
    const administrator = await User.findOne({where: {id: conversation.administratorId}});
    return administrator.username;
}

const getUserInConversation = async (authtoken, conversationName) => {
    const user = await getUserByAuthtoken(authtoken);
    const conversation = await Conversation.findOne({where: {name: conversationName}});
    if(!conversation) return conversation;
    const userInConversation = await UsersInConversation.findOne({where: {
        userId: user.id,
        conversationId: conversation.id
    }});
    return userInConversation;
}

module.exports = {
    joinUserToConversation,
    conversationsUserByAuthtoken,
    accesstokenUserByAuthtoken,
    getMembersConversationByName,
    getConversationAdministrator,
    getUserInConversation
}