const User = require('./userModel');

exports.getAllUsers = (req, res) => {
  const users = User.getAll();
  res.render('users/userView', { users }); // The path relative to the views directory
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser);
  res.redirect('/users');
};
