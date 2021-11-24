const User = require("../models/User");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { name: "", email: "", password: "" };

  // duplicate error code

  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      // console.log(error.properties);
    });
  }
  return errors;
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = (req, res) => {
  res.render("login");
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password, password2 } = req.body;

  try {
    const user = await User.create({ name, email, password, password2 });
    res.status(201).json(user);
  } catch (error) {
    // console.log(error);
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
  // res.render("signup");
  // console.log(req.body);
};
