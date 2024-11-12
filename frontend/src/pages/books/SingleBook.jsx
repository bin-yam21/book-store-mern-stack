import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/books/bookApi";
import { getImgUrl } from "../../utils/getImgUrl";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
function SingleBook() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const { id } = useParams();

  //   console.log("ID from URL:", id); // Check if this is logged correctly
  const { data, isLoading, error } = useFetchBookByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }
  console.log(data);
  //   const { newPrice } = message;

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{data.message.title}</h1>
      <div className="">
        <div>
          <img
            src={`${getImgUrl(data.message.coverImage)}`}
            alt={data.message.title}
            className="mb-8"
          />
        </div>
        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author: </strong>
            {data.message.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published: </strong>
            {new Date(data.message.createdAt).toLocaleString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category: </strong>
            {data.message?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description: </strong>
            {data.message?.description}
          </p>
        </div>
        <button
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
          onClick={() => handleAddToCart(data.message)}
        >
          <FiShoppingCart className="" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default SingleBook;
