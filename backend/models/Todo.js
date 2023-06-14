const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    name:String,
    number:Number,
})

module.exports = mongoose.model("Todo", TodoSchema);