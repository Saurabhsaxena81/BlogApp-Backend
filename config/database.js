const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("DB connected successfully")) // Fix: Now it logs after connection
    .catch((error) => {
      console.log(`DB connection error: ${error}`);
      process.exit(1);
    });
};

module.exports = connectWithDb;
