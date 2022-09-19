import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ENV } from '../../../consts/consts';
import { ReportVideo } from '../../../types/types';
import { groupVideoReportByDate } from '../../../utilits/utils';


export const getVideoEvents = createApi({
    reducerPath: 'getVideoEvents',
    baseQuery: fetchBaseQuery({ baseUrl: ENV + '/admin' }),
    endpoints: (builder) => ({
        getVideoEvents: builder.query<any, void>({
            query: () => `/video`,
            transformResponse: (response: ReportVideo[]) => {
                return groupVideoReportByDate(response).slice(0, 3);
            }
        }),
        getVideoEventById: builder.query<any, string>({
            query: (id) => `/video/${id}`
        })
    })
})

export const { useGetVideoEventsQuery, useGetVideoEventByIdQuery } = getVideoEvents;