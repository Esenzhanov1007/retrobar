import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError, FetchBaseQueryMeta
} from "@reduxjs/toolkit/dist/query/react";
import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export interface OrderData {
    name: string;
    info: string;
    adphoto: string[];
    phone: string;
}

export const getAd = createApi({
    reducerPath: 'getAd',
    baseQuery: fetchBaseQuery({baseUrl: "http://192.168.99.96:3001/admin"}),
    endpoints: (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, 'getAd'>  ) => ({
        getAd: builder.query<OrderData[], void>({
            query: () => '/ad',
        }),
    }),
})

export const { useGetAdQuery } = getAd