const { DataTypes } = require("sequelize");
const { sequelize, id, modelOptions } = require(".");
const { encryptString, generateRandomToken, compareStringWithHash } = require("../utils/encryption");

const User = sequelize.define("User", {
    id,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    authtoken:  DataTypes.STRING
}, modelOptions);

User.sync();

const getUserByUsername = (username) => User.findOne({where: {username}});

const matchCredentials = async (username, password) => {
    const user = await getUserByUsername(username);
    if(user){
        const isPasswordCorrect = compareStringWithHash(password, user.password);
        if(isPasswordCorrect){
            return user.authtoken;
        }
        return null;
    }
    return null;
}

const createUser = async (username, password) => {
    if(!username) return {success: false, message: "Ingresa un nombre de usuario"};
    if(!password) return {success: false, message: "Ingresa una contraseña"};
    const user = await getUserByUsername(username);
    if(user) return {success: false, message: "Nombre de usuario ya existente"};
    const hashedPassword = encryptString(password);
    const authtoken = generateRandomToken();
    User.create({username, password: hashedPassword, authtoken});
    return {success: true, message: "Usuario creado", authtoken};
}

const getUserByAuthtoken = (authtoken) => User.findOne({where: {authtoken: authtoken || null}});

const getBasicDataUserByAuthtoken = (authtoken) => User.findOne({attributes: ["username"], where: {authtoken: authtoken || null}});

const getUserById = (userId) => User.findOne({where: {id: userId}});

module.exports = {
    User,
    matchCredentials,
    createUser,
    getUserByAuthtoken,
    getBasicDataUserByAuthtoken,
    getUserById
}