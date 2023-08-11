import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    newsItemContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 10,
    },
    shadowContainer: {
        flexDirection: 'row',
        justifySelf: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        borderRadius: 5
    },
    newsItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    prodCont: {
        marginRight: 10,
    },
    newsImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    headlineText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#00A8E8'
    },
    descriptionTxt: {
        color: 'gray'
    },
    priceText: {
        fontSize: 14,
        color: 'gray',
    },
    ratingCont: {
        flexDirection: "row", 
    },
    ratingTxt: {
        fontSize: 14,
        color: '#00A8E8'
    }
});

export { styles }