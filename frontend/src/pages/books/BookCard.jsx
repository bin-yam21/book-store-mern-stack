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
    <div className=" rounded-lg transition-shadow duration-300 bg-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book?._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-32 md:w-60 bg-cover px-4 py-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="px-4 ">
          <Link to={`/books/${book?._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book?.description.length > 80
              ? `${book?.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            {book?.newPrice}
            <span className="line-through font-normal ml-2">
              {book.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary  space-x-1 flex py-0.5 px-1   items-center gap-0.5 "
          >
            <FiShoppingCart className="size-5" />
            <span className="text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
