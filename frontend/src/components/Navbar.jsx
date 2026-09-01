import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import avaterImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-parchment/85 backdrop-blur-md">
      <nav className="shell flex h-[72px] items-center justify-between gap-6">
        {/* ---- Brand ---- */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-parchment">
            <HiOutlineBookOpen className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink">
              Birana
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted">
              Bookstore
            </span>
          </span>
        </Link>

        {/* ---- Search (desktop) ---- */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <CiSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search books, authors, genres…"
            className="w-full rounded-full border border-line bg-white/70 py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* ---- Actions ---- */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden rounded-full p-2 text-ink transition-colors hover:bg-cream sm:block">
            <IoIosHeartEmpty className="size-6" />
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <IoCartOutline className="size-5" />
            <span>{cartItems.length}</span>
          </Link>

          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avaterImg}
                    alt="account"
                    className="size-9 rounded-full ring-2 ring-brand"
                  />
                </button>
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-line bg-white shadow-lift">
                    <ul className="py-1.5">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            onClick={() => setIsDropDownOpen(false)}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-ink hover:bg-cream"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          className="block w-full px-4 py-2 text-left text-sm text-ink hover:bg-cream"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full p-2 text-ink transition-colors hover:bg-cream"
              >
                <FaUserCircle className="size-6" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
