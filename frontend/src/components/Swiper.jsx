/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import the Pagination module
import { Pagination } from "swiper/modules";
import BookCard from "../pages/books/BookCard";

const MySwiperComponent = ({ book, index }) => {
  return (
    <Swiper
      modules={[Pagination]}
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
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <BookCard key={index} book={book} />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
