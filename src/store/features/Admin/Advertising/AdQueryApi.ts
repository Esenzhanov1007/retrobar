import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const adQueryApi = createApi({
  reducerPath: "adQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.99.96:3001" }),
  tagTypes: ["ad"],
  endpoints: (build) => ({
    addAd: build.mutation({
      query: (body) => ({
        url: "/admin/ad",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ad"],
    }),
  }),
});

export const { useAddAdMutation } = adQueryApi;