/**
 * Seeds the database with demo books so the storefront isn't empty.
 * Run from the backend folder:  node src/seed.js   (or  npm run seed)
 *
 * Prices are in Ethiopian Birr. `coverImage` values match the image files in
 * frontend/src/assets/books, which the frontend resolves via getImgUrl().
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./books/book.model");

const books = [
  { title: "Fikir Eske Mekabir", description: "A landmark of modern Amharic fiction — a sweeping tale of love, honor and a changing Ethiopia.", category: "Fiction", trending: true, coverImage: "book-1.jfif", oldPrice: 650, newPrice: 480 },
  { title: "Oromay", description: "A bold political novel set against the Red Star campaign — courage, love and disillusionment.", category: "Fiction", trending: true, coverImage: "book-2.jpg", oldPrice: 700, newPrice: 520 },
  { title: "Dertogada", description: "A gripping techno-thriller of secret science, hidden identities and Ethiopian ingenuity.", category: "Thriller", trending: true, coverImage: "book-3.jpg", oldPrice: 720, newPrice: 560 },
  { title: "Ramatohara", description: "The acclaimed follow-up adventure — intrigue and discovery across two continents.", category: "Thriller", trending: false, coverImage: "book-4.jpg", oldPrice: 700, newPrice: 540 },
  { title: "Girracha Kachiloch", description: "A luminous collection of interlinked stories on memory, city life and belonging.", category: "Fiction", trending: false, coverImage: "book-5.jpg", oldPrice: 560, newPrice: 420 },
  { title: "Sememen", description: "A tender, unforgettable novel about family, loss and the quiet strength of ordinary lives.", category: "Fiction", trending: true, coverImage: "book-6.jpg", oldPrice: 600, newPrice: 450 },
  { title: "Atse Menelik", description: "A rich historical portrait of the emperor who defended Ethiopia's independence at Adwa.", category: "History", trending: true, coverImage: "book-7.jpg", oldPrice: 850, newPrice: 690 },
  { title: "Ye'Tewodros Enba", description: "The dramatic life of Emperor Tewodros II and the making of modern Ethiopia.", category: "History", trending: false, coverImage: "book-8.jpg", oldPrice: 780, newPrice: 620 },
  { title: "Tizita", description: "A moving memoir of nostalgia and homecoming, told with warmth and wit.", category: "Biography", trending: false, coverImage: "book-9.jpg", oldPrice: 520, newPrice: 390 },
  { title: "Kadmas Bashaggar", description: "A philosophical journey beyond faith and doubt from one of Ethiopia's finest storytellers.", category: "Fiction", trending: true, coverImage: "book-10.jpg", oldPrice: 640, newPrice: 500 },
  { title: "Ende'weyita", description: "Verse that sings — a celebrated collection of contemporary Amharic poetry.", category: "Poetry", trending: false, coverImage: "book-11.jpg", oldPrice: 420, newPrice: 320 },
  { title: "Ma'ebel", description: "An epic of the sea and the storm within — ambition, love and reckoning.", category: "Fiction", trending: false, coverImage: "book-12.jfif", oldPrice: 660, newPrice: 500 },
  { title: "Sebategnaw Melak", description: "A haunting, tightly woven tale that lingers long after the final page.", category: "Fiction", trending: true, coverImage: "book-13.jpg", oldPrice: 580, newPrice: 440 },
  { title: "Yenegesew Chora", description: "A beloved illustrated story for young readers — courage, kindness and wonder.", category: "Children", trending: false, coverImage: "book-14.jpg", oldPrice: 380, newPrice: 280 },
];

async function seed() {
  if (!process.env.DB_URL) {
    console.error("DB_URL is not set. Copy .env.example to .env and set it first.");
    process.exit(1);
  }
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected. Reseeding books…");
  await Book.deleteMany({});
  const created = await Book.insertMany(books);
  console.log(`Seeded ${created.length} books.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
