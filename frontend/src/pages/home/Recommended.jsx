// import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import BookCard from "../books/BookCard";
import { Swiper } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules"; // Import Navigation as well
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

function Recommended() {
  const { data: bookss, isLoading, error } = useFetchAllBooksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching books</div>;
  const { data: books } = bookss;

  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("books.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
      <div className="">
        <Swiper
          modules={[Pagination, Mousewheel, Navigation]} // Include Navigation here
          // pagination={{ clickable: true }}
          navigation={true} // Enable navigation arrows
          mousewheel={({ forceToAxis: true }, { autoPlay: false })}
          simulateTouch={false} // Enable horizontal scroll with the mouse wheel
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
          {books.length > 0 &&
            books.slice(8, 16).map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Recommended;
