const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
      user: "2b3df4dd6ea59e",
      pass:  "869b9d9971f4e8",
    },
  });

  module.exports = transporter