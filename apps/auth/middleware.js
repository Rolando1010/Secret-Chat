const { getAuth } = require(".");
const { getBasicDataUserByAuthtoken } = require("../api/models/user");

const authentication = async (request, response, next) => {
    const authtoken = getAuth(request);
    const user = await getBasicDataUserByAuthtoken(authtoken);
    if(user) return next();
    return response.redirect("/inicio-sesion");
}

module.exports = authentication;