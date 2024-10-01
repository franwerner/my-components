import { createBreakpoints } from "responsive-component"

type Breakpoints= {
    "xs": 440,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536,
}

const breakpoints = createBreakpoints<Breakpoints>({
    "2xl": 1536,
    lg: 1024,
    md: 768,
    sm: 640,
    xl: 1280,
    xs: 440
})


export type {
     Breakpoints,
}

export {
    breakpoints,
}