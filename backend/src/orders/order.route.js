const express = require("express");
const order = require("./order.model");
const { createOrder, getOrderByEmail } = require("./order.controller");

const router = express.Router();

router.post("/", createOrder);

// get orders by user email address
router.get("/email/:email", getOrderByEmail);

module.exports = router;
