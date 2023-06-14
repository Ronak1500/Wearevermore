const express = require("express");
const router = express.Router();
const Userlist = require("../models/Userlist");

router.get("/", async (req, res) => {
  try {
    const userlist = await Userlist.find();
    res.status(200).json({
      data: userlist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userlist = await Userlist.findById(req.params.id);

    res.status(200).json({
      data: userlist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const userlist = new Userlist(req.body);
    const newuserlist = await userlist.save();

    res.status(200).json({
      data: newuserlist,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await Userlist.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        res.status(200).json({
          msg: "ok",
          user: user,
        });
      } else {
        res.status(200).json({
          msg: "Incorrect Password",
        });
      }
    } else {
      res.status(200).json({
        msg: "User Not Found",
      });
    }
  }
   catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const userlist = await Userlist.findById(req.params.id);

    if (!userlist) {
      return res.status(400).json({ message: "Userlist does not exist" });
    }
    userlist.email = req.body.email || userlist.email;
    userlist.country = req.body.country || userlist.country;
    userlist.firstName = req.body.firstName || userlist.firstName;
    userlist.lastName = req.body.lastName || userlist.lastName;
    userlist.address = req.body.address || userlist.address;
    userlist.appartment = req.body.appartment || userlist.appartment;
    userlist.city = req.body.city || userlist.city;
    userlist.state = req.body.state || userlist.state;
    userlist.pinCode = req.body.pinCode || userlist.pinCode;
    userlist.phoneNumber = req.body.phoneNumber || userlist.phoneNumber;
    userlist.passowrd = req.body.passowrd || userlist.passowrd;
    userlist.billingAddress = req.body.billingAddress || userlist.billingAddress;
  
    const updatedUserlist = await userlist.save();

    res.status(200).json({
      data: updatedUserlist,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Userlist.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Userlist is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
