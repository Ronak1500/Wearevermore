const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json({
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    res.status(200).json({
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    const neworder = await order.save();

    res.status(200).json({
      data: neworder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(400).json({ message: "Order does not exist" });
    }
    order.name = req.body.name || order.name;
    order.number = req.body.number || order.number;
  
    const updatedOrder = await order.save();

    res.status(200).json({
      data: updatedOrder,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Order is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
