const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    productId:String,
    title:String,
    brand:String,
    thumbnailImage:String,
    price:Number,
    quantity:Number,
    size:String,
    email:String
})

module.exports = mongoose.model("Cart", CartSchema);