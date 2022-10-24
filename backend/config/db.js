const mongoose = require('mongoose')

//connection
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try{
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.e9yhvwu.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log('Connected to DB!')
    }catch(e){
        console.log(e)
    }
}

conn()

module.exports =  conn