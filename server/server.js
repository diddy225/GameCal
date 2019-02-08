const express = require('express')
const pasth = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
require('./routes/search')(app);
require('./routes/IGDB')(app);
require('./routes/auth')(app);
// app.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, “../client/build/index.html”));
// })

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Gelp", { useNewUrlParser: true })
.then(() => console.log('DB Connected'))
.catch((err) => {
  console.log(err)
})

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});