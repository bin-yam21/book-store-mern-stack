import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["Books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/books",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define an endpoint to get books
    fetchAllBooks: builder.query({
      query: () => "/",
      transformResponse: (response) => {
        // Optional JSON parsing if response isn't automatically parsed
        if (typeof response === "string") {
          try {
            return JSON.parse(response);
          } catch (error) {
            console.error("Failed to parse response JSON", error);
            return null; // Return null or another appropriate fallback
          }
        }
        return response;
      },
      providesTags: ["Books"],
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (response) => {
        if (typeof response === "string") {
          try {
            return JSON.parse(response);
          } catch (error) {
            console.error("Failed to parse response JSON", error);
            return null; // Return null or another appropriate fallback
          }
        }
        return response;
      },
      providesTags: (results, error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: `/create-book`,
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        meethod: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,

  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
export default booksApi;
