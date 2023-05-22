// require mongoose 
const mongoose = require('mongoose')


// create Schema 
const Schema  = mongoose.Schema

const userSchema = new Schema ({

    name : {
        type : String ,
        required : true 
    },
    email: {
        type : String ,
        required : true , 
         unique : true 
    },
   password : {
        type : String ,
        required : true 
    },
    Phone: {
        type : Number 
    },
})

// export  
module.exports = connect = mongoose.model('user', userSchema );