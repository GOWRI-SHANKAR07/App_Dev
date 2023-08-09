import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Login';


const LoginScreen = ({ navigation, route }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const mail = route.params.user.mail;
    const name = route.params.user.name;
    const pass = route.params.password;


    const handleLogin = () => {
        let emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        } else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("");
            emailValid = true;
        }

        let passwordValid = false;
        if (password.length === 0) {
            setPasswordError("Password is required");
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (email === route.params.user.mail && password === route.params.user.password) {
            alert('Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password + '\n Successfully Logged In');
            setEmail("");
            setPassword("");
        } else {
            alert('Invalid mail id or password')
            setEmail('');
            setPassword('');
        }
        console.log(emailError, passwordError);

        console.log(route.params.user.mail);

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
                    {passwordError.length > 0  && <Text style={styles.error}>{passwordError}</Text>}
                    <TouchableOpacity
                        style={styles.btnCont}
                        onPress={e=> handleLogin(e)}
                    >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen