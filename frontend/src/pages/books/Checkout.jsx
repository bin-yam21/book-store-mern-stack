import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCreateOrderMutation } from "../../redux/features/orders/orderApi";
import Swal from "sweetalert2";

const inputClass =
  "mt-1 h-11 w-full rounded-lg border border-line bg-parchment px-4 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const labelClass = "text-sm font-medium text-ink";

function Checkout() {
  const [isChecked, setIsChecked] = useState(false);
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(0);

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productId: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Order placed!",
        text: "Your order has been created successfully.",
        icon: "success",
        confirmButtonColor: "#1E5140",
      });
      navigate("/order");
    } catch (error) {
      console.error("Error while creating an order", error);
      Swal.fire({
        title: "Something went wrong",
        text: "We couldn't place your order. Please try again.",
        icon: "error",
        confirmButtonColor: "#1E5140",
      });
    }
  };

  if (isLoading) return <div className="py-20 text-center text-muted">Placing your order…</div>;

  return (
    <section className="py-8">
      <h1 className="font-display text-3xl font-semibold text-ink">Checkout</h1>
      <p className="mt-1 text-muted">Cash on delivery · pay when your books arrive.</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]"
      >
        {/* details */}
        <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">
            Delivery details
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-6">
            <div className="md:col-span-6">
              <label htmlFor="name" className={labelClass}>Full name</label>
              <input id="name" type="text" {...register("name", { required: true })} className={inputClass} />
              {errors.name && <p className="mt-1 text-xs text-red-600">Name is required</p>}
            </div>
            <div className="md:col-span-6">
              <label htmlFor="email" className={labelClass}>Email address</label>
              <input id="email" type="text" disabled defaultValue={currentUser?.email || ""} className={`${inputClass} opacity-70`} />
            </div>
            <div className="md:col-span-6">
              <label htmlFor="phone" className={labelClass}>Phone number</label>
              <input id="phone" type="tel" {...register("phone", { required: true })} placeholder="+251 9…" className={inputClass} />
              {errors.phone && <p className="mt-1 text-xs text-red-600">Phone is required</p>}
            </div>
            <div className="md:col-span-4">
              <label htmlFor="address" className={labelClass}>Address / street</label>
              <input id="address" type="text" {...register("address", { required: true })} className={inputClass} />
              {errors.address && <p className="mt-1 text-xs text-red-600">Address is required</p>}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="city" className={labelClass}>City</label>
              <input id="city" type="text" {...register("city", { required: true })} className={inputClass} />
              {errors.city && <p className="mt-1 text-xs text-red-600">City is required</p>}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="country" className={labelClass}>Country</label>
              <input id="country" type="text" defaultValue="Ethiopia" {...register("country", { required: true })} className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="state" className={labelClass}>Region / state</label>
              <input id="state" type="text" {...register("state", { required: true })} className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="zipcode" className={labelClass}>Postal code</label>
              <input id="zipcode" type="text" {...register("zipcode", { required: true })} className={inputClass} />
            </div>
            <div className="md:col-span-6 mt-2">
              <label className="inline-flex items-start gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-0.5 accent-brand"
                />
                <span>
                  I agree to the{" "}
                  <Link className="text-brand underline-offset-2 hover:underline">Terms &amp; Conditions</Link>{" "}
                  and{" "}
                  <Link className="text-brand underline-offset-2 hover:underline">Shopping Policy</Link>.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* summary */}
        <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-ink">Your order</h2>
          <div className="mt-4 flex justify-between text-sm text-muted">
            <span>Items</span>
            <span className="font-medium text-ink">{cartItems.length}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-muted">
            <span>Total</span>
            <span className="font-display text-lg font-semibold text-brand">{totalPrice} Birr</span>
          </div>
          <button
            type="submit"
            disabled={!isChecked || cartItems.length === 0}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place order
          </button>
        </aside>
      </form>
    </section>
  );
}

export default Checkout;
