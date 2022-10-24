const user = require('../models/User')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    //checks if header has a token
    if(!token) return res.status(401).json({errors: ['Unauthorized access.']})

    //checks if token is valid
    try{
        const verified = jwt.verify(token, jwtSecret)

        req.user = await User.findById(verified.id).select('-password')
        
        next()
    }catch(e){
        res.status(401).json({errors: ['Invalid token.']})
    }

}

module.exports = authGuard