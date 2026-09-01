import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import bannerImg from "../../assets/banner-1.jpg";

function Banner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-line bg-cream px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold-soft/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* ---- Copy ---- */}
        <div>
          <span className="eyebrow">ብራና · Ethiopia&apos;s Bookstore</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Stories worth
            <span className="text-brand"> keeping.</span>
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
            From timeless Amharic classics to this week&apos;s new releases —
            discover, order and enjoy books delivered across Addis Ababa and
            beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/" className="btn-primary">
              Shop the collection
              <FiArrowRight className="size-4" />
            </Link>
            <a href="#top-sellers" className="btn-ghost">
              Browse top sellers
            </a>
          </div>

          {/* trust stats */}
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
            <div>
              <dt className="font-display text-2xl font-semibold text-ink">
                2,000+
              </dt>
              <dd className="text-xs uppercase tracking-wider text-muted">
                Titles in stock
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-semibold text-ink">
                24–48h
              </dt>
              <dd className="text-xs uppercase tracking-wider text-muted">
                Addis delivery
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-semibold text-ink">
                4.9★
              </dt>
              <dd className="text-xs uppercase tracking-wider text-muted">
                Reader rating
              </dd>
            </div>
          </dl>
        </div>

        {/* ---- Image ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
            <img
              src={bannerImg}
              alt="A curated shelf of books at Birana"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-card sm:block">
            <p className="font-display text-lg font-semibold text-brand">
              New this week
            </p>
            <p className="text-xs text-muted">Fresh arrivals every Friday</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
