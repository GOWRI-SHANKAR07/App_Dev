import { FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  },


  loginCont: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    width: '80%',
    height: '80%',
    paddingTop: '10%'
  },

  loginTxt: {
    color: '#000',
    paddingTop: '10%',
    fontSize: 20,
  },

  logo: {
    width: '43%',
    height: '9%'
  },

  inpCont: {
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-start',
  },

  authTxt: {
    color: 'grey',
    paddingTop: '10%',
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
    height: '12%',
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