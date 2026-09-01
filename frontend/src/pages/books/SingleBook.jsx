import { Link, useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/books/bookApi";
import { getImgUrl } from "../../utils/getImgUrl";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

function SingleBook() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, error } = useFetchBookByIdQuery(id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return <p className="py-20 text-center text-muted">Loading…</p>;
  }
  if (error) {
    return (
      <p className="py-20 text-center text-muted">Couldn&apos;t load this book.</p>
    );
  }

  const book = data.message;

  return (
    <div className="py-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
      >
        <FiArrowLeft className="size-4" /> Back to store
      </Link>

      <div className="grid gap-10 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
        {/* cover */}
        <div className="flex items-center justify-center rounded-2xl bg-cream p-10">
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="max-h-[420px] w-auto rounded-md object-contain shadow-lift"
          />
        </div>

        {/* details */}
        <div className="flex flex-col">
          {book.category && (
            <span className="eyebrow">{book.category}</span>
          )}
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {book.title}
          </h1>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-brand">
              {book.newPrice}{" "}
              <span className="text-lg font-normal">Birr</span>
            </span>
            {book.oldPrice ? (
              <span className="text-lg text-muted line-through">
                {book.oldPrice} Birr
              </span>
            ) : null}
          </div>

          <p className="mt-6 leading-relaxed text-muted">{book.description}</p>

          <dl className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-ink">Author:</dt>
              <dd className="text-muted">{book.author || "Various"}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-ink">Added:</dt>
              <dd className="text-muted">
                {new Date(book.createdAt).toLocaleDateString()}
              </dd>
            </div>
          </dl>

          <div className="mt-auto pt-8">
            <button
              onClick={() => handleAddToCart(book)}
              className="btn-gold w-full sm:w-auto"
            >
              <FiShoppingCart className="size-4" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
