import { getAuth, signOut } from "@react-native-firebase/auth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

const tAuth = {
    signUp: async (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential | Error> => {
        try {
            const signUpResponse = await getAuth().createUserWithEmailAndPassword(email, password)
            console.debug(signUpResponse)
            return signUpResponse
        } catch (err: any) {
            console.debug("ERROR SERVICE: ", err.message)
            return new Error(err.message.split('] ')[1])
        }
    },

    signOut: async () => {
        try {
            const signOutResponse = await getAuth().signOut()
            console.debug(signOutResponse)
            return signOutResponse
        } catch (err: any) {
            console.debug("ERROR SERVICE: ", err.message)
            return new Error(err.message.split('] ')[1])
        }
    },

    signIn: async (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential | Error> => {
        try {
            const signInResponse = await getAuth().signInWithEmailAndPassword(email, password)
            console.debug(signInResponse)

            return signInResponse
        } catch (err: any) {
            console.debug(err)
            return new Error(err.message.split('] ')[1])
        }
    },

    getCurrentUser: () => {
        try {
            return getAuth().currentUser
        } catch (err) {
            console.debug(err)
        }
    }
}

export default tAuth;