const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const mongodb = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("no connect, error: ", error);
  }
};
module.exports = {
  mongodb,
};
