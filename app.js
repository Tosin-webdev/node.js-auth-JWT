const express = require("express");
const connectDB = require("./connection/database");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

// env file
dotenv.config({ path: ".env" });

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database connectionn
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("home");
});

app.use(userRoutes);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
