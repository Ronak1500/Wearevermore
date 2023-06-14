const mongoose = require("mongoose")

const WishlistSchema = mongoose.Schema({
    productId:String,
    title:String,
    brand:String,
    image:String,
    price:Number,
    quantity:Number,
    size:String,
    email:String
})

module.exports = mongoose.model("Wishlist", WishlistSchema);