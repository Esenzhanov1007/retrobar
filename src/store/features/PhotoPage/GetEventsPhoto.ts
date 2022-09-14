import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { PhotoEvent } from '../../../types/types';
import { ENV } from '../../../consts/consts';

export const getEventsPhoto = createApi({
    reducerPath: 'getEventsPhoto',
    baseQuery: fetchBaseQuery({ baseUrl: ENV + '/user' }),
    endpoints: (builder) => ({
        getEventsPhoto: builder.query<PhotoEvent[], void>({
            query: () => `/photo`,
        }),
        getEventsPhotoById: builder.query<PhotoEvent, number>({
            query: (id) => `/photo/${id}`,
        }),
        getEventsPhotoByDate: builder.query<PhotoEvent[], string>({
            query: (date: string) => `/photo/date/${date}`,
        })
    }),
})

export const { useGetEventsPhotoQuery, useGetEventsPhotoByIdQuery, useLazyGetEventsPhotoByDateQuery } = getEventsPhoto;