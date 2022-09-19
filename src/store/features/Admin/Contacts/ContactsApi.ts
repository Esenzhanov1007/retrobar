import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const ContactsApi = createApi({
  reducerPath: "ContactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.99.96:3001" }),
  tagTypes: ["contacts"],
  endpoints: (build) => ({
    addContacts: build.mutation({
      query: (body) => ({
        url: "/admin/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const { useAddContactsMutation } = ContactsApi;