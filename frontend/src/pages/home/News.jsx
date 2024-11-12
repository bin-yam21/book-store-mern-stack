import { Swiper } from "swiper/react";
import news1 from "../../assets/news/news-1.jfif";
import news2 from "../../assets/news/news-2.jpg";
import news3 from "../../assets/news/news-3.webp";
import news4 from "../../assets/news/news-4.jfif";
import news5 from "../../assets/news/news-5.webp";
import { Pagination, Mousewheel, Navigation } from "swiper/modules"; // Import Navigation as well
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "የስንብት ቀለማት",
    description: "የስንብት ቀለማት ይተሰዉ የ አእዳመ ረታ አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡ ",
    image: news1,
  },
  {
    id: 2,
    title: "ሀሰተኛው በእምነት ስም",
    description:
      "ሀሰተኛው በእምነት ስም ይተሰዉ የ ዓለማየሁ ገላጋይ  አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
    image: news2,
  },
  {
    id: 3,
    title: "ችቦ",
    description: "ችቦ ይተሰዉ የ ዓለማየሁ ዋሴ  አዲሱ ሰራ በዚህ ሳምንት ለገበያ ይዉላል፡፡",
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
    description: "ከ አሜን ባሻገር በዚህ ሳምንት ለገበያ ይዉላል፡፡ ",
    image: news5,
  },
];
function News() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>
      <Swiper
        modules={[Pagination, Mousewheel, Navigation]} // Include Navigation here
        // pagination={{ clickable: true }}
        navigation={true} // Enable navigation arrows
        mousewheel={{ forceToAxis: true }} // Enable horizontal scroll with the mouse wheel
        grabCursor={true} // Enable cursor grabbing for drag-to-slide effect
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {news.length > 0 &&
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-12 items-center sm:flex-row sm:justify-between">
                {/* content */}
                <div className="py-4">
                  <Link to="/">
                    <h3 className="text-lg font-medium hover:text-blue-500">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="w-10  h-[4px] bg-primary mb-5"></div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-18 h-9  object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default News;
