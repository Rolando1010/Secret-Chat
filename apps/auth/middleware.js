const { isRequestAuthenticated } = require("./verifications");
const { getAuth } = require(".");
const { getUserInConversation } = require("../api/models/conversation");

const authentication = async (request, response, next) => {
    const authVerification = await isRequestAuthenticated(request);
    if(authVerification.isAuth) return next();
    return response.redirect("/inicio-sesion");
}

const userInConversation = async (request, response, next) => {
    const authtoken = getAuth(request);
    const { conversationName } = request.params;
    const isUserInConversation = await getUserInConversation(authtoken, conversationName);
    if(isUserInConversation) return next();
    return response.redirect("/");
}

module.exports = {
    authentication,
    userInConversation
};