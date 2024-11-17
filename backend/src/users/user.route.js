const express = require("express");
const jwt = require("jsonwebtoken");
const user = require("./user.model");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await user.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "admin not found" });
    }
    if (admin.password !== password) {
      res.status(401).send({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin._id, username: admin._username, role: admin.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Autentication successful",
      token: token,
      user: { username: admin.username, role: admin.role },
    });
  } catch (error) {
    console.error("Error to login as an admin", error);
    res.status(500).send({ message: "Error to login as an admin" });
  }
});

module.exports = router;
