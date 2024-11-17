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

    // Fetch orders by email and sort by creation date (newest first)
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    // Check if any orders are found
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this email" });
    }

    // Send the found orders
    res.status(200).json({ data: orders });
  } catch (error) {
    console.error("Error while fetching order:", error);

    // Send a server error response
    res.status(500).json({
      message: "Failed to fetch the orders. Please try again later.",
      error: error.message, // Optional: include this only in development/debugging mode
    });
  }
};

module.exports = { createOrder, getOrderByEmail };
