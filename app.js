const express = require("express");
const connectDB = require("./connection/database");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const app = express();

// env file
dotenv.config({ path: ".env" });

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// Database connectionn
connectDB();

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.use(userRoutes);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
