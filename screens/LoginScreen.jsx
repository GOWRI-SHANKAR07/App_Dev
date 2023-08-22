import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../Auth/AuthContext';
import { styles } from '../styles/Login';


const LoginScreen = ({ navigation, route }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const userMail = 'gowrishankaroffl@gmail.com';
    const userPassword = 'sp315';

    const { handlingLogin, Auth } = useAuthContext();

    const handleLogin = async () => {
        try {
            if (email === userMail && password === userPassword) {
                // set userToken
                Auth.setAuth('Logging In')
                await handlingLogin();
                // navigate to HomeScreen
                navigation.navigate('Tab');
            } else {
                console.log("Invalid Credentials");
            }
        } catch (err) {
            console.log("Error user login ", err);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.loginCont}>
                <Image
                    style={styles.logo}
                    source={require('../assets/sprlogo.png')}
                />
                <Text style={styles.loginTxt}>Sign In</Text>
                <View style={styles.inpCont}>
                    <Text style={styles.authTxt}>Email Address*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter email id'
                            placeholderTextColor='grey'
                            value={email}
                            onChangeText={e => setEmail(e)}
                            textContentType='emailAddress'
                        />
                    </View>
                    {emailError.length > 0 && <Text style={styles.error}>{emailError}</Text>}
                    <Text style={styles.authTxt}>Password*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter password'
                            placeholderTextColor='grey'
                            value={password}
                            onChangeText={e => setPassword(e)}
                        />
                    </View>
                    {passwordError.length > 0 && <Text style={styles.error}>{passwordError}</Text>}
                    <TouchableOpacity
                        style={styles.btnCont}
                        onPress={handleLogin}
                    >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupCont}>
                    <Text>Don't have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.signupTxt}>  Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



export default LoginScreen
