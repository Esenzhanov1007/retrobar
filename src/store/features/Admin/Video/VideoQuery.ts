import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const videoQueryApi = createApi({
  reducerPath: "videoQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.99.96:3001" }),
  tagTypes: ["video"],
  endpoints: (build) => ({
    addVideo: build.mutation({
      query: (body) => ({
        url: "/admin/video",
        method: "POST",
        body,
      }),
      invalidatesTags: ["video"],
    }),
  }),
});

export const { useAddVideoMutation } = videoQueryApi;