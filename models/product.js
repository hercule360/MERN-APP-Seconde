// require mongoose 
const mongoose = require ('mongoose')

// create schema 
const schema = mongoose.Schema

const productSchema = new Schema ( {

    nom : {
        type : String , 
        required: true 
    } , 
    
    prix : {
        type : String , 
        required : True 

    }, 

    description : {
      type : String 
    },
    
})
// export 
module.exports = product = mongoose.model('product', productSchema);