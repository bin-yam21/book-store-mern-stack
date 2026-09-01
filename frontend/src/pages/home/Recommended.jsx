import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

function Recommended() {
  const { data: bookss, isLoading, error } = useFetchAllBooksQuery();
  const books = bookss?.data ?? [];
  const recommended = books.slice(6, 14);

  return (
    <section className="rounded-3xl bg-brand px-6 py-14 sm:px-10 sm:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            For you
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-parchment sm:text-4xl">
            Recommended reads
          </h2>
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <p className="text-parchment/80">Loading…</p>
        ) : error ? (
          <p className="text-parchment/80">Couldn&apos;t load recommendations.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {recommended.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Recommended;
