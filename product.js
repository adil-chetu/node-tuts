const mongoose = require('mongoose')
/*product schema that is used to validate the field name */
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})
module.exports = mongoose.model('products', productSchema)