
const mongoose = require("mongoose")

const LoginSchema = mongoose.Schema({
    email:String,
    password:String,

})

module.exports = mongoose.model("Login", LoginSchema);