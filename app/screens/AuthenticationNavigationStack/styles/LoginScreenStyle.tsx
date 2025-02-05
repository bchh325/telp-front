import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: "red",
        borderWidth: 1,
        paddingVertical: 20,
    },

    logoContainer: {
        height: "15%",
        borderColor: "red",
        borderWidth: 1,
    },

    authContainer: {
        marginHorizontal: 25,
        height: "85%",
        borderColor: "red",
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    inputContainer: {
        borderColor: "green",
        borderWidth: 1,
        height: "30%",
        display: "flex",
        rowGap: 20,
        justifyContent: "center"
    },

    buttonContainer: {
        height: "30%",
        borderColor: "green",
        borderWidth: 1,
        display: "flex"
    },

    imageContainer: {
        backgroundColor: "black",
        position: "absolute",
        height: "100%",
        width: "100%"
    },

    image: {
        position: "absolute",
        width: "100%",
        opacity: 0.2
    }
})

export default styles