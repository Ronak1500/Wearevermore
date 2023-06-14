const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:     { type: String },
    brand:     { type: String },
    price:     { type: String },
    color:     { type: String },
    quantity:     { type: Number },
    discription:     { type: String },
    category:     { type: String },
    size:     { type: String },
    image: {type:Array}
   
    
  
  })

module.exports = mongoose.model("Product", ProductSchema);