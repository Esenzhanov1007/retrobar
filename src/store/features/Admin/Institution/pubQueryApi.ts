import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const pubQueryApi = createApi({
  reducerPath: "pubQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.99.96:3001" }),
  tagTypes: ["pub"],
  endpoints: (build) => ({
    addPub: build.mutation({
      query: (body) => ({
        url: "/admin/pub",
        method: "POST",
        body,
      }),
      invalidatesTags: ["pub"],
    }),
  }),
});

export const { useAddPubMutation } = pubQueryApi;