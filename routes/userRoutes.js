const express = require("express");
const authController = require("../controller/authController");
const route = express.Router();

route.get("/login", authController.login_get);
route.post("/login", authController.login_post);
route.get("/signup", authController.signup_get);
route.post("/signup", authController.signup_post);
route.get("/logout", authController.logout_get);

module.exports = route;
