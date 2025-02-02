import { getAuth, signOut } from "@react-native-firebase/auth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";


const tAuth = {
    signUp:  (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> => {
        try {
            const auth = getAuth()
            const signUpResponse = auth?.createUserWithEmailAndPassword(email, password)
            return signUpResponse
        } catch (err: any) {
            return err
        }
    },

    signOut: async () => {
        try {
            const auth = getAuth()
            const signOutResponse = await auth?.signOut()
            console.debug(signOutResponse)
        } catch (err) {
            console.debug(err)
        }
    },

    signIn: async (email: string, password: string) => {
        try {
            const auth = getAuth()
            const signInResponse = await auth?.signInWithEmailAndPassword(email, password)
            console.debug(signInResponse)
        } catch (err) {
            console.debug(err)
        }
    },

    getCurrentUser: () => {
        try {
            const auth = getAuth()
            return auth?.currentUser
        } catch (err) {
            console.debug(err)
        }
    }
}

export default tAuth;