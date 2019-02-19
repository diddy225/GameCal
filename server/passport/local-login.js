const jwt = require('jsonwebtoken');
const db = require('../models');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim().toLowerCase(),
    password: password.trim()
  };

  return db.Users.findOne({ email: userData.email }, (err, user) => {
    
    if(err) { return done(err); }

    if(!user) {
      const error = new Error('Incorrect username or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if(err) { return done(err); }

      if(!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }
      
      const payload = {
        sub: user._id
      };

      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        username: user.username,
        _id: user._id
      };
      
      return done(null, token, data);
    });
  });
});