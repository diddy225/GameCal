const db = require('../models');
const PassportLocalStrategy = require('passport-local').Strategy;


module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
    username: req.body.username.trim()
  }

  const newUser = new db.Users(userData);
  newUser.save((err) => {
    if(err) { return done(err); }

    return done(null)
  });
});