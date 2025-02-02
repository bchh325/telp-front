import tAuth from "@/services/telpAuth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";


export const tAuthApi = createApi({
    reducerPath: 'tAuthApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({

        signUp: builder.query({
          queryFn: async (userParams) => {
            try {              
              console.debug("signing up")
              const userResponse: FirebaseAuthTypes.UserCredential = await tAuth.signUp(userParams.email, userParams.password)
              const user = userResponse.user

              return { data: {email: user.email, uid: user.uid} }
            } catch (error) {
              console.debug("error")
              console.debug(error)
              return { error: null }
            }
          },
        }),
        
      }),
})

export const { useLazySignUpQuery } = tAuthApi

