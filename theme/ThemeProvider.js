import { createContext, useContext, useEffect, useState } from "react";
import { darkColors, lightColors } from "./Colors";
import { useColorScheme } from "react-native";

export const ThemeContext  = createContext({
    dark: false,
    color: lightColors,
    setScheme: () => {}
})

export const ThemeProvider = ( props ) => {

    const colorScheme = useColorScheme(colorScheme === 'dark')
    const [isDark, setIsDark] = useState(colorScheme === 'dark')

    useEffect(() => {
      setIsDark(colorScheme === 'dark')
    }, [colorScheme])

    const defaultTheme = {
        dark: isDark,
        color: isDark ? darkColors : lightColors,
        setScheme: (scheme) => setIsDark(scheme === 'dark')
    }
    

    return(
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext);