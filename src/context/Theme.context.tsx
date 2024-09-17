import { Theme } from "@/types/theme.type";
import React, { createContext, ReactNode, useContext, useState } from "react";

const themeDefault: Theme = {
    palette: {
        primary: {
            '50': '#edefff',
            '100': '#dee3ff',
            '200': '#c4cbff',
            '300': '#a0a8ff',
            '400': '#7a7aff',
            '500': '#665bf9',
            '600': '#573dee',
            '700': '#4b2fd3',
            '800': '#3d29aa',
            '900': '#362a89',
            '950': '#21184e',
        },
        danger: {
            '50': '#fef2f2',
            '100': '#fee6e5',
            '200': '#fccfcf',
            '300': '#f9a8a8',
            '400': '#f57779',
            '500': '#ec474f',
            '600': '#dc3545',
            '700': '#b7192c',
            '800': '#99182c',
            '900': '#83182c',
            '950': '#490812',
        },
        success: {
            '50': '#f1fcf2',
            '100': '#dff9e4',
            '200': '#c1f1cb',
            '300': '#90e5a3',
            '400': '#58d073',
            '500': '#32b550',
            '600': '#28a745',
            '700': '#1f7634',
            '800': '#1e5d2d',
            '900': '#1a4d27',
            '950': '#092a12',
        },
        info: {
            '50': '#eefcfd',
            '100': '#d3f7fa',
            '200': '#adeef4',
            '300': '#74dfec',
            '400': '#34c8dc',
            '500': '#17a2b8',
            '600': '#1789a3',
            '700': '#196e85',
            '800': '#1d5b6d',
            '900': '#1d4c5c',
            '950': '#0d313f',
        },
        warning: {
            '50': '#ffffea',
            '100': '#fffbc5',
            '200': '#fff885',
            '300': '#ffee46',
            '400': '#ffdf1b',
            '500': '#ffc107',
            '600': '#e29400',
            '700': '#bb6902',
            '800': '#985108',
            '900': '#7c420b',
            '950': '#482200',
        },
        secondary: {
            '50': '#f5f6f6',
            '100': '#e5e7e8',
            '200': '#cdd1d4',
            '300': '#aab0b6',
            '400': '#808990',
            '500': '#6c757d',
            '600': '#565c64',
            '700': '#4a4f54',
            '800': '#414449',
            '900': '#3a3c3f',
            '950': '#242628',

        }
    },
    breakpoints: {
        "xs": 440,
        "sm": 640,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "2xl": 1536,
    }
}

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
    theme: Theme
}

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<"light" | "dark">("light")

    return (
        <ThemeModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeModeContext.Provider>
    )
}

const ThemeProvider = ({ theme, children }: ThemeProps) => {

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeModeProvider>{children}</ThemeModeProvider>
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext)
const useThemeMode = () => useContext(ThemeModeContext)

export { useTheme, useThemeMode }
export default ThemeProvider