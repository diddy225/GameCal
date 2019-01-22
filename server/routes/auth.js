const validator = require("validator");
const passport = require("passport");

module.exports = function(app) {
  const validateSignUpForm = payload => {
    const errors = {};
    let isFormValid = true;
    let message = "";

    if (
      !payload ||
      typeof payload.email !== "string" ||
      !validator.isEmail(payload.email)
    ) {
      isFormValid = false;
      errors.password = "Pleave provide a valid email address.";
    }
    if (
      !payload ||
      typeof payload.username !== "string" ||
      payload.username.trim().length <= 6
    ) {
      isFormValid = false;
      errors.username = "Username needs to be at least 6 characters.";
    }
    if (
      !payload ||
      typeof payload.password !== "string" ||
      payload.password.trim().length < 8
    ) {
      isFormValid = false;
      errors.password = "Password needs to be at least 8 characters.";
    }
    if (
      !payload ||
      typeof payload.password2 !== "string" ||
      payload.password2.trim() !== payload.password.trim()
    ) {
      isFormValid = false;
      errors.confirm = "Passwords need to match.";
    }
    if (!isFormValid) {
      message = "Check the form for errors.";
    }
    return {
      success: isFormValid,
      message,
      errors
    };
  };

  const validateLoginForm = payload => {
    const errors = {};
    let isFormValid = true;
    let message = "";

    if (
      !payload ||
      typeof payload.email !== "string" ||
      payload.email.trim().length === 0
    ) {
      isFormValid = false;
      errors.email = "Please provide your email address.";
    }

    if (
      !payload ||
      typeof payload.password !== "string" ||
      payload.password.trim().length === 0
    ) {
      isFormValid = false;
      errors.password = "Please provide your password.";
    }

    if (!isFormValid) {
      message = "Check the form for errors.";
    }

    return {
      success: isFormValid,
      message,
      errors
    };
  };

  app.post("/signup", (req, res, next) => {
    const validationResult = validateSignUpForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

    return passport.authenticate('local-signup', (err) => {
      if (err) {
        if (err.name === "MongoError" && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: "Check the form for errors.",
            errors: {
              email: "This email is already taken."
            }
          });
        }
        return res.status(400).json({
          success: false,
          message: "Could not process the form."
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "You have successfully signed up! Now you should be able to log in."
      });
    })(req, res, next);
  });

  app.post("/login", (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === "IncorrectCredentialsError") {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }

        return res.status(400).json({
          success: false,
          message: "Could not process the form."
        });
      }
      
      return res.json({
        success: true,
        message: "You have successfully logged in!",
        token,
        user: userData
      });
    })(req, res, next);
  });
};
