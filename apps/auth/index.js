const { getCookie, setCookie, deleteCookie } = require("cookies-next");

const NAME_COOKIE_AUTH_TOKEN = "authtoken";

const getAuth = (req) => getCookie(NAME_COOKIE_AUTH_TOKEN, {req});

const setAuth = (token, req, res) => setCookie(NAME_COOKIE_AUTH_TOKEN, token, {req, res});

const deleteAuth = (req, res) => deleteCookie(NAME_COOKIE_AUTH_TOKEN, {req, res});

module.exports = {
    getAuth,
    setAuth,
    deleteAuth
};