import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: "relative",
    },

    ImgCont: {
        width: '100%',
        height: 300
    },

    TxtCont: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
    },

    PostNav: {
        position: "absolute",
        top: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        backgroundColor: 'gray'
    },

    PostTxt: {
        paddingLeft: 10,
    },

    headerTxt: {
        textAlign: "center",
        fontSize: 25,
        color: '#00A8E8',
        display: "flex",
        justifyContent: 'center',
    }
})

export { styles }