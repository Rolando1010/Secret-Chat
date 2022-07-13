const isRequestAuthenticated = require("./isRequestAuthenticated");

const authentication = async (request, response, next) => {
    const authVerification = await isRequestAuthenticated(request);
    if(authVerification.isAuth) return next();
    return response.redirect("/inicio-sesion");
}

module.exports = authentication;