import { FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // width: '100%',
    // height: '100%',
    // borderColor: '#000',
    // borderWidth: 2,
  },

  scrollCont: {
    flex: 1,
  },

  loginCont: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    width: '80%',
    height: '100%',
    paddingTop: '10%'
  },

  loginTxt: {
    color: '#000',
    paddingTop: '10%',
    fontSize: 20,
  },


  logo: {
    width: '54%',
    height: '9%',
    // borderWidth: 1,
    // borderColor: '#000',
  },

  inpCont: {
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-start',
  },

  authTxt: {
    color: 'grey',
    paddingTop: '5%',
    fontSize: 20,
  },

  inpTxt: {
    color: '#000',
  },

  authCont: {
    backgroundColor: '#f5f0fc',
    marginTop: '2%',
    borderRadius: 10,
    padding: '2%',
  },

  btnCont: {
    marginTop: '10%',
    backgroundColor: '#00A8E8',
    height: '10%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTxt: {
    color: '#fff',
    fontSize: 20,
  },

  error: {
    color: 'red',
  },

  success: {
    color: 'green',
  },

  signupCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  signupTxt: {
    color: '#00A8E8'
  },

  signupBtn: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10
  }

});

export { styles }