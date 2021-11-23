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
  } catch (error) {
    console.log(error);
    res.status(400).send("error, user not created");
  }
  // res.render("signup");
  // console.log(req.body);
};
