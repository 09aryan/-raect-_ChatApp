const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/chatAPP", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;