import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { FiTrash2, FiArrowRight } from "react-icons/fi";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(0);

  const handleRemoveFromCart = (product) => dispatch(removeFromCart(product));
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Shopping cart
        </h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="rounded-full border border-line px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:border-red-300 hover:bg-red-50"
          >
            Clear cart
          </button>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* items */}
        <div className="rounded-2xl border border-line bg-white p-2 shadow-card">
          {cartItems.length > 0 ? (
            <ul className="divide-y divide-line">
              {cartItems.map((product) => (
                <li key={product._id} className="flex gap-4 p-4">
                  <div className="size-24 shrink-0 overflow-hidden rounded-lg border border-line bg-cream p-2">
                    <img
                      alt={product?.title}
                      src={`${getImgUrl(product.coverImage)}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        <Link to={`/books/${product._id}`}>{product?.title}</Link>
                      </h3>
                      <p className="whitespace-nowrap font-semibold text-ink">
                        {product?.newPrice} Birr
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{product?.category}</p>
                    <div className="mt-auto flex items-center justify-between pt-3 text-sm">
                      <span className="text-muted">Qty: 1</span>
                      <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="inline-flex items-center gap-1.5 font-medium text-red-600 hover:text-red-700"
                      >
                        <FiTrash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-12 text-center text-muted">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* summary */}
        <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-ink">
            Order summary
          </h2>
          <div className="mt-4 flex justify-between text-sm text-muted">
            <span>Subtotal</span>
            <span className="font-medium text-ink">{totalPrice} Birr</span>
          </div>
          <p className="mt-1 text-xs text-muted">
            Shipping and taxes calculated at checkout.
          </p>
          <Link
            to="/checkout"
            className={`btn-primary mt-6 w-full ${
              cartItems.length === 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Checkout <FiArrowRight className="size-4" />
          </Link>
          <Link
            to="/"
            className="mt-3 block text-center text-sm font-medium text-brand hover:underline"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
