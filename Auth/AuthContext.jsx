import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const [userToken, setUserToken] = useState('');


    const login = async () => {
        try {
            const token = 'user123';
            await AsyncStorage.setItem('userToken', token);
            setUserToken(token);
            setIsLoggedIn(true);
        } catch (err) {
            console.log("Error Logging In ", err);
        }
    }

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            setUserToken('');
            setIsLoggedIn(false);
            console.log("user,", userToken);
            console.log("Logout pressed");
        } catch (err) {
            console.log("Error Logging Out ", err);
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, user: userToken }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
