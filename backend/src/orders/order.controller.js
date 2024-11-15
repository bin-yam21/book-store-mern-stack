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
const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const order = await Order.find({ email }).sort({ createdAt: -1 });
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.status(200).json({ data: order });
  } catch (error) {
    console.error("Error while fetching order", error);
    res.status(500).send({ message: "failed to fetch the order" });
  }
};
module.exports = { createOrder, getOrderByEmail };
