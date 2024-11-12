import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footerLogo from "../assets/footer-logo1.png";
function Footer() {
  return (
    <footer className="bg-gray-200 text-black font-medium py-10 px-4">
      {/* top section */}
      <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <img src={footerLogo} alt="Logo" className="mb-3 w-40" />
        <ul className="flex flex-col md:flex-row gap-4 mb-6">
          <li>
            <a href="#home" className="hover:text-purple-500">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-purple-500">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* right-side news letter */}
      <div className="w-full md:w-1/2 mx-auto text-center ">
        <p className="mb-4 font-bold ">
          Subscribe to our newsletter to recieve latest update , news and offer!
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 rounded-l-md "
          />
          <button className="bg-blue-400 px-6 py-2 rounded-r-md hover:bg-primary-dark">
            Subscribe
          </button>
        </div>
      </div>
      {/* bottem section */}
      <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* left side primary links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-purple-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-purple-500">
              Terms of service
            </a>
          </li>
        </ul>
        {/* rightside */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-700"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
