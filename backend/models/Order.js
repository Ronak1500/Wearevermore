const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    order:Array,
    date:String,
    customerId:String,
    address:String,
    phoneNumber:Number,
    shippingType:String,
    totalPrice:Number,
    firstName:String,
    lastName:String,
    orderId:String,
  state:String,
  city:String,
  email:String
})

module.exports = mongoose.model("Order", OrderSchema);