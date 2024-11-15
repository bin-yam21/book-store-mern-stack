import { useAuth } from "../../context/AuthContext";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/orderApi";

function OrderPage() {
  const { currentUser } = useAuth();

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useGetOrderByEmailQuery(currentUser?.email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        <p>Error fetching orders:</p>
        <pre>{error?.message || "Something went wrong"}</pre>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No Orders Found</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={order._id || index} className="border p-4 mb-2">
              <p className="bg-secondary p-1 mb-1 rounded w-10 text-white">
                #{index + 1}
              </p>
              <h2 className="font-bold">Order ID: {order?._id}</h2>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">TotalPrice: ${order.totalPrice}</p>
              {/* Add more details about the order here */}
              <h3 className="font-semibold mt-2 ">Address: </h3>
              <p>
                {order.address.city},{order.address.state},
                {order.address.country},{order.address.zipcode}
              </p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order.productIds.map((productId) => (
                  <li key={productId}>{productId}</li>
                )) || []}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderPage;
