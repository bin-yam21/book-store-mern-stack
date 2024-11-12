const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    category: String,
    trending: Boolean,
    coverImage: String,
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("book", bookSchema);

module.exports = book;
