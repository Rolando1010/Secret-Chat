const express = require("express");
const authentication = require("../auth/middleware");

const router = express.Router();

const indexPage = (request, response) => response.render('index.html');

router.get("/registro", indexPage);
router.get("/inicio-sesion", indexPage);
router.get("", authentication, indexPage);
router.get("/conversaciones/:conversationName", authentication, indexPage);

module.exports = router;