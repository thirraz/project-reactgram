const { body } = require("express-validator");

const userCreateValidation = () => {
     return [
          body("name")
               .isString()
               .withMessage("name is required.")
               .isLength({ min: 3 })
               .withMessage("name must be at least 3 characters."),
          body("email")
               .isString()
               .withMessage("e-mail is required.")
               .isEmail()
               .withMessage("please, enter a valid e-mail."),
          body("password")
               .isString()
               .withMessage("password is required.")
               .isLength({ min: 5 })
               .withMessage("password must be at least 5 characters."),
          body("confirmPassword")
               .isString()
               .withMessage("Please confirm the password.")
               .custom((value, { req }) => {
                    if (value != req.body.password) {
                         throw new Error("Passwords are different!");
                    }

                    return true;
               }),
     ];
};

const loginValidation = () => {
     return [
          body("email")
               .isString()
               .withMessage("The e-mail is required.")
               .isEmail()
               .withMessage("Please, enter a valid e-mail."),
          body("password").isString().withMessage("The password is required."),
     ];
};

const userUpdateValidation = () => {
     return [
          body("name")
               .optional()
               .isLength({ min: 3 })
               .withMessage("Name must be at least 3 characters."),
          body("password")
               .optional()
               .isLength({ min: 5 })
               .withMessage("Password must be at lesat 5 characters"),
     ];
};

module.exports = {
     userCreateValidation,
     loginValidation,
     userUpdateValidation,
};
