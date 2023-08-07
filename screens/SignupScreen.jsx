import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Signup';


const LoginScreen = ({ navigation }) => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [auth, setAuth] = useState(false);
    const [authSuccess, setAuthSuccess] = useState(false);

    let userAuth = {
        mail: 'gowrishankaroffl@gmail.com',
        password: 'Sp@315',
    }

    const handleLogin = () => {
        if (mail === userAuth.mail && password === userAuth.password) {
            setUser(mail);
            setPass(password);
            setMail('');
            setPassword('');
            setAuth(false);
            setAuthSuccess(true);
            console.log("Successfully Logged In");
            navigation.navigate('Signup')
        } else {
            setAuth(true);
            setAuthSuccess(false);
            setMail('');
            setPassword('');
            console.log("Invalid mail or passsword");
        }
        console.log(mail, password);
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
                            value={mail}
                            onChangeText={e => setMail(e)}
                        />
                    </View>
                    <Text style={styles.authTxt}>Email Address*</Text>
                    <View style={styles.authCont}>
                        <TextInput
                            style={styles.inpTxt}
                            placeholder='Enter email id'
                            placeholderTextColor='grey'
                            value={mail}
                            onChangeText={e => setMail(e)}
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
                            value={password}
                            onChangeText={e => setPassword(e)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btnCont}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {authSuccess ? <Text style={styles.success}>Successfully Logged In, {user}</Text> : auth && <Text style={styles.error}>Invalid Mail id or Password</Text>}
            </View>
        </View>
    )
}

export default LoginScreen