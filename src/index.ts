import { AnimationVariants, HTMLResponsiveComponent } from "responsive-component";
import { MyComponentProps } from "./components/MyComponent";
import { PaletteColors } from "./theme/palette.theme";

export type ComponentThemeProps<
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
>
    = {
        paletteColor?: PaletteColors
        darkMode?: boolean
    } & MyComponentProps<T, K, C>