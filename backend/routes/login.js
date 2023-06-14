const express = require("express");
const router = express.Router();
const Login = require("../models/Login");

router.get("/", async (req, res) => {
  try {
    const login = await Login.find();
    res.status(200).json({
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);

    res.status(200).json({
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const login = new Login(req.body);
    const newlogin = await login.save();

    res.status(200).json({
      data: newlogin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


router.post("/login", async (req, res) => {
  try {
    const newteacher = await Login.findOne({ email: req.body.email });
    if (newteacher) {
      if (newteacher.password === req.body.password) {
        res.status(200).json({
          msg: "ok",
          data: newteacher,
        });
      } else {
        res.status(200).json({
          msg: "incorrect password",
        });
      }
    } else {
      res.status(200).json({
        msg: "invalid user",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);

    if (!login) {
      return res.status(400).json({ message: "Login does not exist" });
    }
    login.email = req.body.email || login.email;
    login.password = req.body.password || login.password;
  
    const updatedLogin = await login.save();

    res.status(200).json({
      data: updatedLogin,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Login.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Login is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;