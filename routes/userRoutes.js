const express = require("express");
const route = express.Router();

route.get("/login", authController.login_get);
route.get("/login", authController.login_post);
route.get("/signup", authController.signup_get);
route.get("/signup", authController.signup_post);
