import tAuth from "@/services/telpAuth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserParams } from "../interfaces";

interface SignUpData {
  email: string,
  uid: string
}

export const tAuthApi = createApi({
  reducerPath: 'tAuthApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({

    signUp: builder.query<Object, UserParams>({
      queryFn: async (userParams) => {
        const userResponse: FirebaseAuthTypes.UserCredential | Error = await tAuth.signUp(userParams.email, userParams.password)

        if (userResponse !instanceof Error) {
          return { error: userResponse.message }
        }

        const user = userResponse.user
        return { data: { email: user.email, uid: user.uid } }
      },
    }),

  }),
})

export const { useLazySignUpQuery } = tAuthApi

