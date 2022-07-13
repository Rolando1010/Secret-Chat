const isRequestAuthenticated = require("./isRequestAuthenticated");

const authentication = async (request, response, next) => {
    const authVerification = isRequestAuthenticated(request);
    if(authVerification.isAuth) return next();
    return response.redirect("/inicio-sesion");
}

module.exports = authentication;