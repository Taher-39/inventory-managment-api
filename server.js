const express = require("express");
const cors = require("cors");
require("colors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const Product = require("./models/product.model");

connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

//route
app.get("/", async (req, res, next) => {
  res.send("Connected");
});

app.use("/api/v1/product", require("./route/product.route"));

app.listen(port, () => {
  console.log(`App running on ${port}`.yellow.bold);
});
