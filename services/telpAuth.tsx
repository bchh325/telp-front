import { getAuth, createUserWithEmailAndPassword } from "@react-native-firebase/auth";

const tAuth = {
    signUp: async (email: string, password: string) => {
        let auth = null
        try {
            auth = getAuth()
        } catch (err) {
            console.debug(err)
        }
        
        auth ? createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.debug("successful sign up")
            })
            .catch((err) => {
                console.debug(err)
            })
        : null
    }
}

export default tAuth;