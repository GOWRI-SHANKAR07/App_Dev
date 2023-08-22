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

    



    const Auth = useMemo(() => {
        return { setAuth, setSubscribe, setUnSubscribe, subscribe, unSubscribe, setUserToken };
    }, [auth, subscribe, unSubscribe, userToken])

    



    return (
        <AuthContext.Provider value={Auth} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
