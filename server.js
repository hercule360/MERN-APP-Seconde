// require express 
const express = require('express')

// get instance 
const app = express()

// middleware body parser 
app.use(express.json())

// require dotenv 
require('dotenv').config()

// connectDB 
const connect = require ('./config/connectDB')
connect()



// create PORT 
const PORT = process.env.PORT

// listen to port 
app.listen(PORT, (err)=> {
err? console.log(err)
:console.log(` the server is running on PORT ${PORT}`)

})

//require routes 
app.use('/api/products', require('./routes/ProductRoute'))

app.use('api/user', require ('./routes/userRoute'))

