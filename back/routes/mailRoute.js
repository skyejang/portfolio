// routes/mailRoutes.js
const express = require("express");
const { sendMail } = require("../controllers/mailController");

const router = express.Router();
router.post("/send-email", sendMail);

module.exports = router;
