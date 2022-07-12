const express = require("express");
const authentication = require("../auth/middleware");
const {
    register,
    login,
    basicDataUser,
    joinConversation,
    conversationsUser,
    accesstokenUser,
    membersConversation,
    administratorConversation
} = require("./controllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/basic-data", authentication, basicDataUser);
router.get("/user/conversations", authentication, conversationsUser);
router.get("/user/accesstoken", authentication, accesstokenUser);
router.post("/conversations/:conversationName/join", authentication, joinConversation);
router.get("/conversations/:conversationName/members", authentication, membersConversation);
router.get("/conversations/:conversationName/administrator", authentication, administratorConversation);

module.exports = router;