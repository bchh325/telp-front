import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const springApi = createApi({
    reducerPath: 'springApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://10.39.109.157:8080/" }),
    endpoints: (builder) => ({
        getPaginatedPictures: builder.query<any, { placeId: string, documentIdKeyCursor: string, querySize: number}>({
            query: (args) => {
                const { placeId, documentIdKeyCursor, querySize } = args
                return {
                    url: '/pictures/paginate',
                    params: {placeId, documentIdKeyCursor, querySize}
                }
            }
            ,
        }),
        testApi: builder.query({
            query: () => {
                console.debug("testingApi")
                return { url: ``}
            }
        })
    }),
})

export const { useGetPaginatedPicturesQuery, useTestApiQuery } = springApi

