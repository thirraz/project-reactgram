const express = require('express')
const router = express.Router()

//Middlewares
const validate = require('../middlewares/handleValidation')
const {userCreateValidation} = require('../middlewares/userValidation')

//Controller
const {register} = require('../controllers/UserController')

//Routes
router.post('/register', userCreateValidation() ,validate, register)

module.exports = router