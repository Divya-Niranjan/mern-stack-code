const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  let user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    let savedUser = await user.save();
    const token = jwt.sign({ userId: savedUser._id }, "my-secret-key");
    res.status(200).send({ token });
  } catch (err) {
    return res.status(401).send("Invalid email or password");
  }
});



router.post("/login", async (req, res) => {
  try {
    let getUser = await User.findOne({ email: req.body.email });

    console.log(getUser);
    if (!getUser) {
      return res.status(401).send("Invalid email or password");
    }

    const result = await bcrypt.compare(req.body.password, getUser.password);
    if (result) {
      // sign token and send it in response
      const token = jwt.sign({ email: getUser.email }, "my-secret-key");
      res.json({ token });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
