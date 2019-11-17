const User = require('../models/user');

exports.getPostRoot = (req, res, next) => {
  const user = new User();
  user.save();
  res.send("Hello world");
}