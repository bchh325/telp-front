import tAuth from "@/services/telpAuth";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";


export const tAuthApi = createApi({
    reducerPath: 'tAuthApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({

        signUp: builder.query({
          queryFn: async (args) => {
            try {
              const user = await tAuth.signUp("testemail1232132@gmail.com", "123141241231")
              return { data: user }
            } catch (error) {
              return { error }
            }
          },
        }),
        
      }),
})

export const { useLazySignUpQuery } = tAuthApi

