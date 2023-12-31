import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    button: {
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
    },

    buttonText: {
        fontSize: 16,
    },
})

export { styles }