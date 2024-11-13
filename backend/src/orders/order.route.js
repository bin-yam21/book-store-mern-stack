const express = require("express");
const order = require("./order.model");
const { createOrder } = require("./order.controller");

const router = express.Router();

router.post("/", createOrder);

module.exports = router;
