import { createContext, FC, ReactNode, useContext } from "react";
import  palette  from "../constant/palette.constant";


const others = {
    shadow : {
        light : "2px 2px 8px rgba(0, 0, 0, 0.2)",
        medium : "5px 5px 15px rgba(0, 0, 0, 0.4)",
        heavy : "10px 10px 30px rgba(0, 0, 0, 0.6)"
    }
}

const themeDefault = {
    palette,
    others
} 

const ThemeContext = createContext(themeDefault)

interface ThemeProvider<T extends object = object> {
    children?: ReactNode
    theme?: typeof themeDefault & T
}

const getTheme = () =>  useContext(ThemeContext)

 
const ThemeProvider: FC<ThemeProvider> = ({ children, theme = themeDefault }) => {

    return <ThemeContext.Provider
        value={theme}
        children={children}
    />
}

export { ThemeContext, themeDefault,getTheme }
export default ThemeProvider