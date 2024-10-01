import { Theme, themeDefault } from "@/theme";
import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeModeContext {
    setMode: (mode: "dark" | "light") => void,
    mode: "dark" | "light"
}

const ThemeContext = createContext<Theme>(themeDefault)
const ThemeModeContext = createContext<ThemeModeContext>({
    mode: "light",
    setMode() {
    },
})

interface ThemeProps {
    children?: ReactNode,
    theme?: Theme
}

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<"light" | "dark">("light")

    return (
        <ThemeModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeModeContext.Provider>
    )
}

const ThemeProvider = ({ theme = themeDefault, children }: ThemeProps) => {

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeModeProvider>{children}</ThemeModeProvider>
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext)
const useScheme = () => useContext(ThemeModeContext)

export { useScheme, useTheme };
export default ThemeProvider