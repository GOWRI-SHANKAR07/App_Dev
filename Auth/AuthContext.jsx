import { View, Text } from 'react-native'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children, navigation }) => {

    const [userToken, setUserToken] = useState('');
    const [auth, setAuth] = useState('');
    const [subscribe, setSubscribe] = useState('');
    const [unSubscribe, setUnSubscribe] = useState('');

    const login = async () => {
        try {
            const token = 'user123';
            await AsyncStorage.setItem('userToken', token);
            setUserToken(token);
            navigation.navigate('Tab');
            // navigate to HomeScreen
            console.log('Login Pressed');
        } catch (err) {
            console.log("Error Logging In ", err);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            setUserToken('');
            console.log("Logout pressed");
            navigation.navigate('Login');
        } catch (err) {
            console.log("Error Logging Out ", err);
        }
    };

    const Auth = useMemo(() => {
        return { setAuth, setSubscribe, setUnSubscribe, subscribe, unSubscribe };
    }, [auth])

    const handlingLogin = useCallback(() => {
        return login(); 
    }, [subscribe])

    const handlingLogout = useCallback(() => {
        return logout(); 
    }, [unSubscribe])

    return (
        <AuthContext.Provider value={Auth} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
