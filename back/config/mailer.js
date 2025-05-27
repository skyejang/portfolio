// config/mailer.js
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skyee.jang@gmail.com",
    pass: process.env.NODEMAILER_PWD,
  },
});

module.exports = transporter;
