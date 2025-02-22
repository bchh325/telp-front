import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Platform } from "react-native";
import { PaginationQueryParams, PaginationResponse } from "../../types/interfaces";

const baseUrl = Platform.OS == "ios" ? "http://localhost:8080/" : "http://10.0.2.2:8080/"

console.debug(baseUrl)

export const springApi = createApi({
    reducerPath: 'springApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPaginatedPictures: builder.query<PaginationResponse, PaginationQueryParams>({
            query: (args) => {
                const { placeId, documentIdKeyCursor, querySize } = args
                return {
                    url: '/pictures/paginate',
                    params: {placeId, documentIdKeyCursor, querySize}
                }
            }
            ,
        }),
        getPaginatedRefresh: builder.query<PaginationResponse, PaginationQueryParams>({
            query: (args) => {
                const {placeId, documentIdKeyCursor, querySize, isRefresh } = args
                return {
                    url: '/pictures/paginate',
                    params: {placeId, documentIdKeyCursor, querySize, isRefresh}
                }
            }
        }),
        testApi: builder.query({
            query: () => {
                console.debug("testingApi")
                return { url: ``}
            }
        })
    }),
})

export const { useGetPaginatedPicturesQuery, useTestApiQuery, useLazyGetPaginatedRefreshQuery } = springApi

