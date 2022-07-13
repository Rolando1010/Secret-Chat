const { getAuth } = require(".");
const { getBasicDataUserByAuthtoken } = require("../api/models/user");

const isRequestAuthenticated = async (request) => {
    const authtoken = getAuth(request);
    const user = await getBasicDataUserByAuthtoken(authtoken);
    if(!user) return { isAuth: false };
    return { userdata: { username: user.username }, isAuth: true };
}

module.exports = isRequestAuthenticated;