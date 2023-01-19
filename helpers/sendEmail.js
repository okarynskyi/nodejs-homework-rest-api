const sgMail = require('@sendgrid/mail')
require("dotenv").config()

const { SENDGRID_API_KEY } = process.env;
  sgMail.setApiKey(SENDGRID_API_KEY);

// const data = {
//   to: 'tebipa3294@ukbob.com',
//   subject: 'Verify email',
//   html: '<strong>Verify email</strong>',
// }

const sendEmail = async (data) => {
  const email = { ...data, from: 'okarynskyy@gmail.com' };
  await sgMail.send(email);
  return true;
}

module.exports = sendEmail;