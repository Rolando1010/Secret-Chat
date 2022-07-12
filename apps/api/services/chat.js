const twilio = require("twilio");

require("dotenv").config();

const createAccessToken = (username) => {
    const {
        TWILIO_ACCOUNT_SID,
        TWILIO_API_KEY,
        TWILIO_API_SECRET,
        SERVICE_SID
    } = process.env;
    const { AccessToken } = twilio.jwt;
    const { ChatGrant } = AccessToken;
    const accesstoken = new AccessToken(
        TWILIO_ACCOUNT_SID,
        TWILIO_API_KEY,
        TWILIO_API_SECRET,
        { identity: username }
    );
    const conversationsGrant = new ChatGrant({ serviceSid: SERVICE_SID });
    accesstoken.addGrant(conversationsGrant);
    return accesstoken.toJwt();
}

module.exports = {
    createAccessToken
};