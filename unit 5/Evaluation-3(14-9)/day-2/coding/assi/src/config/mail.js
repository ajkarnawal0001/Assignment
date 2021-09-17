const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "eb22f81bf71237", // generated ethereal user
      pass: "0b015021551c30", // generated ethereal password
    },
  });
