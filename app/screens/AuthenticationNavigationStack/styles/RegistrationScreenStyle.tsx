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
        display: "flex",
        rowGap: 20,
        justifyContent: "center"
    },

    buttonContainer: {
        borderColor: "green",
        borderWidth: 1,
        display: "flex",
    },
})

export default styles