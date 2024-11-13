import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/orders",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    // getOrders: builder.query({
    //   query: () => {},
    // }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
export default orderApi;
