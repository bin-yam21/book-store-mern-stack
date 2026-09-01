/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

function BookCard({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* ---- Cover ---- */}
      <Link
        to={`/books/${book?._id}`}
        className="relative block overflow-hidden bg-cream"
      >
        <div className="flex aspect-[3/4] items-center justify-center p-5">
          <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt={book?.title}
            className="h-full w-auto max-w-full rounded-md object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {book?.trending && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-parchment">
            Trending
          </span>
        )}
        {book?.category && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-medium text-muted">
            {book.category}
          </span>
        )}
      </Link>

      {/* ---- Body ---- */}
      <div className="flex flex-1 flex-col p-4">
        <Link to={`/books/${book?._id}`}>
          <h3 className="line-clamp-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand">
            {book?.title}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {book?.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold text-ink">
              {book?.newPrice} <span className="text-sm font-normal">Birr</span>
            </span>
            {book?.oldPrice ? (
              <span className="text-sm text-muted line-through">
                {book.oldPrice}
              </span>
            ) : null}
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            aria-label="Add to cart"
            className="flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <FiShoppingCart className="size-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
