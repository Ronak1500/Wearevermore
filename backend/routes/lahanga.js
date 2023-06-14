const express = require("express");
const router = express.Router();
const Lahanga = require("../models/Lahanga");

router.get("/", async (req, res) => {
  try {
    const lahanga = await Lahanga.find();
    res.status(200).json({
      data: lahanga,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lahanga = await Lahanga.findById(req.params.id);

    res.status(200).json({
      data: lahanga,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const lahanga = new Lahanga(req.body);
    const newlahanga = await lahanga.save();

    res.status(200).json({
      data: newlahanga,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const lahanga = await Lahanga.findById(req.params.id);

    if (!lahanga) {
      return res.status(400).json({ message: "Lahanga does not exist" });
    }
    lahanga.name = req.body.name || lahanga.name;
    lahanga.number = req.body.number || lahanga.number;
  
    const updatedLahanga = await lahanga.save();

    res.status(200).json({
      data: updatedLahanga,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Lahanga.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Lahanga is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
