import { createContext, ReactNode } from "react"
import {DefaultTheme, ThemeProvider} from 'styled-components'
import usePersistedState from "../utils/usePersistedState"

import {light, dark} from '../styles/themes/'

interface ThemeContextData {
    toggleTheme: () => void
}

interface ThemeProviderProps{
    children: ReactNode
}

export const ThemeContextCustom = createContext({} as ThemeContextData)

export function ThemeContextProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return(
        <ThemeContextCustom.Provider value={{toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContextCustom.Provider>
    )
} 