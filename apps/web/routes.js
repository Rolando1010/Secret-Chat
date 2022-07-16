const express = require("express");
const { authentication, userInConversation } = require("../auth/middleware");

const router = express.Router();

const indexPage = (request, response) => response.render('index.html');

router.get("/registro", indexPage);
router.get("/inicio-sesion", indexPage);
router.get("", authentication, indexPage);
router.get("/conversaciones/:conversationName", [authentication, userInConversation], indexPage);

module.exports = router;