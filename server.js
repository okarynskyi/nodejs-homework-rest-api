const mongoose = require('mongoose');

const app = require('./app')

const { DB_HOST } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => app.listen(3000, () => {
  console.log("Database connection successful")
}))
  .catch(err => {
    console.log(err);
    process.exit(1);
  })


//   const sgMail = require('@sendgrid/mail')
// require("dotenv").config()

// const { SENDGRID_API_KEY } = process.env;
//   sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//   to: 'tebipa3294@ukbob.com',
//   from: 'okarynskyy@gmail.com',
//   subject: 'Verify email',
//   text: 'Verify email',
//   html: '<strong>Verify email</strong>',
// }
// sgMail
//   .send(email)
//   .then(() => {
//     console.log('Email send')
//   })
//   .catch((error) => {
//     console.error(error.message)
//   })
