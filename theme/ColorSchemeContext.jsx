// ColorSchemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

const ColorSchemeContext = createContext();

export const useColorSchemeContext = () => {
    return useContext(ColorSchemeContext);
};

export const ColorSchemeProvider = ({ children }) => {
    const colorScheme = useColorScheme(); // Use React Native's useColorScheme hook
    const [currentScheme, setCurrentScheme] = useState(colorScheme);

    const toggleColorScheme = () => {
        setCurrentScheme(prevScheme => (prevScheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ColorSchemeContext.Provider value={{colorScheme: currentScheme, toggleColorScheme}}>
            {children}
        </ColorSchemeContext.Provider>
    );
};
