import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

export const orderApi = createApi({
  reducerPath: "orderApi",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
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
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
        method: "GET",
      }),
      providesTags: ["Orders"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = orderApi;
export default orderApi;
