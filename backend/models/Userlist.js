const mongoose = require("mongoose")

const UserlistSchema = mongoose.Schema({
    email:String,
    country:String,
    firstName:String,
    lastName:String,
    address:String,
    billingAddress:Array,
    appartment:String,
    city:String,
    state:String,
    pinCode:String,
    phoneNumber:String,
    password:String  
})

module.exports = mongoose.model("Userlist", UserlistSchema);