const { genSaltSync, compareSync, hashSync } = require("bcryptjs");
const { v4 } = require("uuid");

const encryptString = (string) => {
    const salt = genSaltSync(10);
    const hashedString = hashSync(string, salt);
    return hashedString;
}

const compareStringWithHash = (string, hash) => compareSync(string ,hash);

const generateRandomToken = () => v4();

module.exports = {
    encryptString,
    compareStringWithHash,
    generateRandomToken
}