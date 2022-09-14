import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { PhotoEvent } from '../../../types/types';

export const getEventsPhoto = createApi({
    reducerPath: 'getEventsPhoto',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.99.96:3001/admin' }),
    endpoints: (builder) => ({
        getEventsPhoto: builder.query<PhotoEvent[], void>({
            query: () => `/photo`,
        }),
        getEventsPhotoById: builder.query<PhotoEvent, number>({
            query: (id) => `/photo/${id}`,
        }),
    }),
})

export const { useGetEventsPhotoQuery, useGetEventsPhotoByIdQuery } = getEventsPhoto;