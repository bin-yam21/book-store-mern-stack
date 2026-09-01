import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="mt-8 bg-brand-dark text-parchment">
      {/* newsletter */}
      <div className="shell border-b border-white/10 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Join the Birana reading list
          </h3>
          <p className="mt-2 text-parchment/70">
            New arrivals, staff picks and offers — straight to your inbox.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-parchment placeholder:text-parchment/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              Subscribe <FiArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* main */}
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-gold text-white">
              <HiOutlineBookOpen className="size-5" />
            </span>
            <span className="font-display text-xl font-semibold">Birana</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-parchment/70">
            Ethiopia&apos;s online bookstore — bringing Amharic literature,
            history and ideas to readers everywhere.
          </p>
        </div>

        <FooterCol
          title="Shop"
          links={["New releases", "Top sellers", "Amharic classics", "Children"]}
        />
        <FooterCol
          title="Company"
          links={["About us", "Contact", "Stores", "Careers"]}
        />
        <FooterCol
          title="Support"
          links={["Help center", "Delivery", "Returns", "FAQ"]}
        />
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-parchment/60">
            © {new Date().getFullYear()} Birana Bookstore. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-parchment/70 transition-colors hover:text-gold">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-parchment/70 transition-colors hover:text-gold">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-parchment/70 transition-colors hover:text-gold">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* eslint-disable react/prop-types */
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-parchment">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-parchment/70 transition-colors hover:text-gold"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
