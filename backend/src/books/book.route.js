const express = require("express");
const book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.conntroller");
const router = express.Router();

// post a book/book api
router.post("/create-book", postABook);
// get all books
router.get("/", getAllBooks);
// get a single book
router.get("/:id", getSingleBook);
// update a book
router.put("/edit/:id", updateBook);
// delete a book
router.delete("/:id", deleteBook);

module.exports = router;
