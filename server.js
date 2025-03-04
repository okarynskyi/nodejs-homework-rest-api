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
