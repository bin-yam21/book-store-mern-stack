import { useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel, Navigation } from "swiper/modules"; // Import Navigation as well
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

const categories = [
  "Choose a genra",
  "Religion",
  "Adventure",
  "Fiction",
  "History",
  "Marketing",
  "Children",
  "Business",
];

function TopSellers() {
  // const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genra");
  const { data: bookss, isLoading, error } = useFetchAllBooksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching books</div>;
  const { data: books } = bookss;

  // useEffect(() => {
  //   fetch("books.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  const filteredBooks =
    selectedCategory === "Choose a genra"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none bg-[#EAEAEA]"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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
        {filteredBooks.map((books, index) => (
          <SwiperSlide key={index}>
            <BookCard book={books} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopSellers;
