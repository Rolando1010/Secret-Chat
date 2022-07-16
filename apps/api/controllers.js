const { createUser, matchCredentials, getBasicDataUserByAuthtoken } = require("./models/user");
const {
    joinUserToConversation,
    conversationsUserByAuthtoken,
    accesstokenUserByAuthtoken,
    getMembersConversationByName,
    getConversationAdministrator
} = require("./models/conversation");
const { setAuth, getAuth } = require("../auth");
const { isRequestAuthenticated } = require("../auth/verifications");

const register = async (request, response) => {
    const { username, password } = request.body;
    const { success, message, authtoken } = await createUser(username, password, request, response);
    if(success) setAuth(authtoken, request, response);
    return response.json({ success, message });
}

const login = async (request, response) => {
    const { username, password } = request.body;
    const validLogin = await matchCredentials(username, password, request, response);
    if(validLogin) setAuth(validLogin, request, response);
    return response.json({
        success: Boolean(validLogin),
        message: validLogin ? "OK" : "Credenciales incorrectas"
    });
}

const auth = async (request, response) => {
    const authVerification = await isRequestAuthenticated(request);
    return response.json(authVerification);
}

const joinConversation = async (request, response) => {
    const authtoken = getAuth(request);
    const { conversationName } = request.params;
    const accesstoken = await joinUserToConversation(authtoken, conversationName);
    return response.json({ accesstoken });
}

const conversationsUser = async (request, response) => {
    const authtoken = getAuth(request);
    const conversations = await conversationsUserByAuthtoken(authtoken);
    return response.json({ conversations });
}

const accesstokenUser = async (request, response) => {
    const authtoken = getAuth(request);
    const accesstoken = await accesstokenUserByAuthtoken(authtoken);
    return response.json({ accesstoken });
}

const membersConversation = async (request, response) => {
    const { conversationName } = request.params;
    const members = await getMembersConversationByName(conversationName);
    return response.json({ members });
}

const administratorConversation = async (request, response) => {
    const { conversationName } = request.params;
    const administrator = await getConversationAdministrator(conversationName);
    return response.json({ administrator });
}

module.exports = {
    register,
    login,
    auth,
    joinConversation,
    conversationsUser,
    accesstokenUser,
    membersConversation,
    administratorConversation
};