import tAuth from "@/services/telpAuth";
import { FirebaseAuthTypes, signOut } from "@react-native-firebase/auth";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserSignInParams, UserSignUpParams } from "../interfaces";

interface SignUpData {
  email: string,
  uid: string
}

export const tAuthApi = createApi({
  reducerPath: 'tAuthApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({

    signUp: builder.query<Object, UserSignUpParams>({
      queryFn: async (userSignUpParams) => {
        const userResponse: FirebaseAuthTypes.UserCredential | Error = await tAuth.signUp(userSignUpParams.email, userSignUpParams.password)

        if (userResponse !instanceof Error) {
          return { error: userResponse.message }
        }

        const user = userResponse.user
        return { data: { email: user.email, uid: user.uid } }
      },
    }),

    signIn: builder.query<Object, UserSignInParams>({
      queryFn: async (userSignInParams) => {
        console.debug("signing in")
        console.debug(userSignInParams)
        const userResponse: FirebaseAuthTypes.UserCredential | Error = await tAuth.signIn(userSignInParams.email, userSignInParams.password)

        if (userResponse !instanceof Error) {
          return { error: userResponse.message }
        }

        const user = userResponse.user
        
        return { data: { email: user.email, uid: user.uid } }
      },
    }),

    signOut: builder.query<Object, void>({
      queryFn: async () => {
        const signOutResponse = await tAuth.signOut()

        console.debug("Sign Out Response: ", signOutResponse)
        if (signOutResponse !instanceof Error) {
          return { error: "Error signing out" }
        }
        
        return { data: "Sign out successful" }
      }
    })

  }),
})

export const { useLazySignUpQuery, useLazySignInQuery, useLazySignOutQuery } = tAuthApi

