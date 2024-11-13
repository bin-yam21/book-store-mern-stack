const Order = require("./order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json({
      status: "success",
      data: {
        newOrder: savedOrder,
      },
    });
  } catch (error) {
    console.error("Error saving order", error);
    res.status(400).json({
      status: "fail",
      message: "Invalid data",
    });
  }
};
module.exports = { createOrder };
