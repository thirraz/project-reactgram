const {body} = require('express-validator')

const userCreateValidation = () =>{
    return [
        body('name')
            .isString()
            .withMessage('O nome é obrigatório.')
            .isLength({min: 3})
            .withMessage('O nome precisa ter pelo menos 3 caracteres.')
    ]
}

module.exports = {
    userCreateValidation,
}