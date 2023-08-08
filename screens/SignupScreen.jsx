import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Signup';
import { SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';


const SignupScreen = ({ navigation }) => {

    // state initializing
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cfrmPasswordError, setCfrmPasswordError] = useState('')

    // userdetails obj
    let userAuth = {
        name: '',
        mail: '',
        password: '',
    }

    // handling signup button
    const handleSignup = () => {
        // name validation
        if (name.length == 0) {
            setNameError('Name is requied');
        } else if (name.split(' ').join('') === '') {
            setNameError('Name cannot contain only spaces')
        } else {
            setNameError('');
            userAuth.name = name;
            console.log(userAuth.name);
        }

        // email validation
        if (email.length == 0) {
            setEmailError('Email is required');
        } else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces')
        } else {
            setEmailError('');
            userAuth.mail = email;
            console.log(userAuth.mail);
        }

        // password validation
        if (password.length == 0) {
            setPasswordError('Password is required');
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        } else {
            setPasswordError('');
            userAuth.password = password;
            console.log(userAuth.password);
        }

        // confirm password validation
        if (confirmPassword.length == 0) {
            setCfrmPasswordError('Confirm password is required');
        } else if (password != confirmPassword) {
            setCfrmPasswordError('Password does not match');
        } else if (password === confirmPassword) {
            setCfrmPasswordError('');
        }

        console.log(userAuth);

        if (nameError === '' && emailError === '' && passwordError === '' && cfrmPasswordError === '') {
            navigation.navigate('Login', {
                user: userAuth,
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginCont}>
                <Image
                    style={styles.logo}
                    source={require('../assets/sprlogo.png')}
                />
                <Text style={styles.loginTxt}>Sign Up</Text>
                <View style={styles.inpCont}>
                    <Text style={styles.authTxt}>Name*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter name'
                            placeholderTextColor='grey'
                            value={name}
                            onChangeText={e => setName(e)}
                        />
                    </View>
                    {nameError.length > 0 && <Text style={styles.error}>{nameError}</Text>}
                    <Text style={styles.authTxt}>Email Address*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter email id'
                            placeholderTextColor='grey'
                            value={email}
                            onChangeText={e => setEmail(e)}
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
                    <Text style={styles.authTxt}>Confirm Password*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter password'
                            placeholderTextColor='grey'
                            value={confirmPassword}
                            onChangeText={e => setConfirmPassword(e)}
                        />
                    </View>
                    {cfrmPasswordError.length > 0 && <Text style={styles.error}>{cfrmPasswordError}</Text>}
                    <TouchableOpacity
                        style={styles.btnCont}
                        onPress={() => handleSignup()}
                    >
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignupScreen