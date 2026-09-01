import { useState } from "react";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

const ALL_CATEGORIES = "All genres";
const categories = [
  ALL_CATEGORIES,
  "Fiction",
  "History",
  "Biography",
  "Business",
  "Poetry",
  "Children",
  "Religion",
];

function SectionSkeleton({ message }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-cream/50 p-10 text-center text-muted">
      {message}
    </div>
  );
}

function TopSellers() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const { data: bookss, isLoading, error } = useFetchAllBooksQuery();

  const books = bookss?.data ?? [];

  const filteredBooks =
    selectedCategory === ALL_CATEGORIES
      ? books
      : books.filter(
          (book) =>
            book.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section id="top-sellers" className="py-14 sm:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">Handpicked</span>
          <h2 className="section-title mt-2">Top sellers</h2>
        </div>

        {/* genre filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "border-brand bg-brand text-parchment"
                  : "border-line bg-white text-muted hover:border-brand hover:text-brand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <SectionSkeleton message="Loading books…" />
        ) : error ? (
          <SectionSkeleton message="Couldn't load books. Please try again." />
        ) : filteredBooks.length === 0 ? (
          <SectionSkeleton message="No books in this genre yet." />
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {filteredBooks.slice(0, 8).map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TopSellers;
