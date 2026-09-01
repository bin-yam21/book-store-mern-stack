import news1 from "../../assets/news/news-1.jfif";
import news2 from "../../assets/news/news-2.jpg";
import news3 from "../../assets/news/news-3.webp";
import news4 from "../../assets/news/news-4.jfif";
import news5 from "../../assets/news/news-5.webp";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const news = [
  {
    id: 1,
    title: "የስንብት ቀለማት",
    description: "የስንብት ቀለማት ይተሰዉ የ አእዳመ ረታ አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news1,
  },
  {
    id: 2,
    title: "ሀሰተኛው በእምነት ስም",
    description:
      "ሀሰተኛው በእምነት ስም ይተሰዉ የ ዓለማየሁ ገላጋይ አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news2,
  },
  {
    id: 3,
    title: "ችቦ",
    description: "ችቦ ይተሰዉ የ ዓለማየሁ ዋሴ አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news3,
  },
  {
    id: 4,
    title: "ዮቶር ኮብላይ ካህን",
    description: "ዮቶር ኮብላይ ካህን 2 በ ደራሲ ዓለማየሁ ደመቀ አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news4,
  },
  {
    id: 5,
    title: "ከ አሜን ባሻገር",
    description: "ከ አሜን ባሻገር በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news5,
  },
];

function News() {
  return (
    <section className="py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="eyebrow">From the shelf</span>
          <h2 className="section-title mt-2">Latest news &amp; releases</h2>
        </div>
        <Link
          to="/"
          className="hidden items-center gap-1 text-sm font-semibold text-brand hover:underline sm:flex"
        >
          View all <FiArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="aspect-[16/10] overflow-hidden bg-cream">
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="amharic text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="amharic mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Read more <FiArrowUpRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default News;
