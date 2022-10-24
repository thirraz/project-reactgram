const {body} = require('express-validator')

const userCreateValidation = () =>{
    return [
        body('name')
            .isString()
            .withMessage('name is required.')
            .isLength({min: 3})
            .withMessage('name must be at least 3 characters.'),
        body('email')
            .isString()
            .withMessage('e-mail is required.')
            .isEmail()
            .withMessage('please, enter a valid e-mail.'),
        body('password')
            .isString()
            .withMessage('password is required.')
            .isLength({min: 5})
            .withMessage('password must be at least 5 characters.'),
        body('confirmPassword')
            .isString()
            .withMessage('Please confirm the password.')
            .custom((value, {req}) => {
                if(value != req.body.password){
                    throw new Error('Passwords are different!')
                }

                return true
            })
    ]
}

module.exports = {
    userCreateValidation,
}