import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import avaterImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "dashboard", href: "/dashboard" },
  { name: "orders", href: "/order" },
  { name: "cart Page", href: "/cart" },
  { name: "check Out", href: "/checkout" },
];

function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* left-side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiOutlineBars3CenterLeft className="size-6" />
            </Link>

            {/* seacrh input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <CiSearch className="absolute inline-block inset-y-2 left-3" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>
          {/* right-side */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                    <img
                      src={avaterImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/* show dropdowns */}
                  {isDropDownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              onClick={() => setIsDropDownOpen(false)}
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
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
                <Link to="/login">
                  <FaUserCircle className="size-6" />
                </Link>
              )}
            </div>

            <button className="hidden sm:block">
              <IoIosHeartEmpty className="size-6" />
            </button>
            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
            >
              <IoCartOutline />
              {cartItems.length > 0 ? (
                <span className="text-sm font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-sm font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
