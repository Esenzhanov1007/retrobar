import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const photoQueryApi = createApi({
  reducerPath: "photoQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.99.96:3001" }),
  tagTypes: ["photo"],
  endpoints: (build) => ({
    addPhoto: build.mutation({
      query: (body) => ({
        url: "/admin/photo",
        method: "POST",
        body,
      }),
      invalidatesTags: ["photo"],
    }),
  }),
});

export const { useAddPhotoMutation } = photoQueryApi;