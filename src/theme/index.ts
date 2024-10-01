import { AdaptedBreakpoints, createBreakpoints } from "responsive-component";
import { breakpoints, Breakpoints } from "./breakpoints.theme";
import { palette, Palette } from "./palette.theme";

interface Theme {
    palette: Palette,
    breakpoints: AdaptedBreakpoints<Breakpoints>,
}

const themeDefault: Theme = {
    breakpoints: breakpoints,
    palette: palette,
}

interface createTheme {
    palette: Palette,
    breakpoints: Breakpoints,
}

const createTheme = ({
    breakpoints,
    palette = themeDefault.palette
}: createTheme) => {
    
    const newTheme: Theme = {
        breakpoints: breakpoints ? createBreakpoints(breakpoints) : themeDefault.breakpoints,
        palette,
    }
    return newTheme
}

export {
    themeDefault,
    createTheme,
    type Theme
}