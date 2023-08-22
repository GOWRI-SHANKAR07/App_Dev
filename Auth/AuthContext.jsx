import { View, Text } from 'react-native'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {

    const [userToken, setUserToken] = useState('');
    const [auth, setAuth] = useState('');

    const Auth = useMemo(() => {
        return { setAuth, handlingLogin, handlingLogout };
    }, [auth]);

    const login = async () => {
        try {
            const token = 'user123';
            await AsyncStorage.setItem('userToken', token);
            setUserToken(token);
        } catch (err) {
            console.log("Error Logging In ", err);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            setUserToken('');
            console.log("Logout pressed");
        } catch (err) {
            console.log("Error Logging Out ", err);
        }
    };

    // handling login in useCallback
    const handlingLogin = useCallback(() => {
        login();
    }, [auth])

    // handling signup in useCallback
    const handlingLogout = useCallback(() => {
        logout();
    }, [auth])

    return (
        <AuthContext.Provider value={Auth} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
