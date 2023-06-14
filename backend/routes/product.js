const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id/", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const newproduct = await product.save();

    res.status(200).json({
      data: newproduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ message: "Product does not exist" });
    }
    product.brand = req.body.brand || product.brand;
    product.price = req.body.price || product.price;
    product.name = req.body.name || product.name;
    product.color = req.body.color || product.color;
    product.size = req.body.size || product.size;
    product.discription = req.body.discription || product.discription;
    product.category = req.body.category || product.category;
    product.image = req.body.image || product.image;
                  product.quantity = req.body.quantity || product.quantity;
    const updatedUser = await product.save();

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});
router.put("/qty/:productId/:cartId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    await Cart.findByIdAndRemove(req.params.cartId);

    if (!product) {
      return res.status(400).json({ message: "Product does not exist" });
    }
    product.quantity = product.quantity - req.body.quantity;
    const updatedUser = await product.save();

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Product is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;