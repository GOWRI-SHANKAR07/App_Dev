import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Signup';


const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cfrmPasswordError, setCfrmPasswordError] = useState('')


    let userAuth = {
        name: '',
        mail: '',
        password: '',
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
                    <TouchableOpacity
                        style={styles.btnCont}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen