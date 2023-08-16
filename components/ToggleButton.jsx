import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useColorSchemeContext } from '../theme/ColorSchemeContext'
import { useAuthContext } from '../Auth/AuthContext';


export const ToggleTheme = () => {

    const { colorScheme, toggleColorScheme } = useColorSchemeContext();

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
            onPress={toggleColorScheme}
        >
            <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Toggle Mode</Text>
        </TouchableOpacity>
    )
}

export const Logout = () => {
    const { colorScheme, toggleColorScheme } = useColorSchemeContext();
    const { logout } = useAuthContext();

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
            onPress={logout}
        >
            <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Logout</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
    },
});