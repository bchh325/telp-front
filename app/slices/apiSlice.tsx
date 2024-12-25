import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface greetingResponse {
    response: string
}

export const springApi = createApi({
    reducerPath: 'springApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://10.0.2.2:8080/" }),
    endpoints: (builder) => ({
        getGreeting: builder.query<greetingResponse, void>({
            query: () => `greeting`,
        })
    }),
})

export const { useLazyGetGreetingQuery } = springApi

