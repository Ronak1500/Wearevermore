const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");

router.get("/", async (req, res) => {
  try {
    const wishlist = await Wishlist.find();
    res.status(200).json({
      data: wishlist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    res.status(200).json({
      data: wishlist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const wishlist = new Wishlist(req.body);
    const newwishlist = await wishlist.save();

    res.status(200).json({
      data: newwishlist,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    if (!wishlist) {
      return res.status(400).json({ message: "Wishlist does not exist" });
    }
    wishlist.productId = req.body.productId || wishlist.productId;
     wishlist.title = req.body.title || wishlist.title;
    wishlist.brand = req.body.brand || wishlist.brand;
    wishlist.thumbnailImage = req.body.thumbnailImage || wishlist.thumbnailImage;
    wishlist.price = req.body.price || wishlist.price;
    wishlist.quantity = req.body.quantity || wishlist.quantity;
    wishlist.size = req.body.size || wishlist.size;
    wishlist.email = req.body.email || wishlist.email;
  
    const updatedWishlist = await wishlist.save();

    res.status(200).json({
      data: updatedWishlist,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Wishlist.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Wishlist is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
