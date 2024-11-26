const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stat");
// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// API Routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB Connection
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB is connected successfully!");
}
main().catch((err) => console.error("MongoDB connection error:", err));

// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome user");
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));
