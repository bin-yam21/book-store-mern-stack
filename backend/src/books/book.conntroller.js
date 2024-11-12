const book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = new book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating a book:", error);
    res.status(500).send({ message: "Something has occurred" });
  }
};
// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await book.find().sort({ createdAt: 1 });
    res.status(200).send({ data: books });
  } catch (error) {
    console.error("Error featching a book:", error);
    res
      .status(500)
      .send({ message: "Something has occurred while featching a book" });
  }
};
// get a single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookdata = await book.findById(id);
    if (!bookdata) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: bookdata });
  } catch (error) {
    console.error("Error while fetching a data");
    res.status(500).send({
      message: "An Error has occured during fetching the required data",
    });
  }
};
// update book data
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book update succesfully", updateBook: updateBook });
  } catch (error) {
    console.error("Error while updating a data");
    res.status(500).send({
      message: "Failed to update a book",
    });
  }
};
// delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book deleted succesfully", deletedBook: deletedBook });
  } catch (error) {
    console.error("Error while deleting a data");
    res.status(500).send({
      message: "Failed to delete a book",
    });
  }
};
module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
