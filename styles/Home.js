import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: '10%',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#00A8E8'
    },
    sectionHeading: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
      color: '#00A8E8'
    },
    input: {
      borderWidth: 1,
      borderColor: '#bbb',
      padding: 10,
      marginBottom: 10,
    },
    userData: {
      marginTop: 20,
      borderWidth: 1,
      borderLeftWidth: 5,
      borderLeftColor: '#1f603f',
      padding: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    btnCont: {
        backgroundColor: '#00A8E8',
        width: '50%',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: "center"
    },
    btnTxt: {
        color: '#fff',
    },
    errTxt: {
        color: 'red',
    }
  });

export {styles}