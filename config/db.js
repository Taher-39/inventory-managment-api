const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://taher1234:<password>@cluster0.cvvga4z.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
