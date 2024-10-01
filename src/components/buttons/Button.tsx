
import { useTheme } from "@/context/Theme.context";
import MyComponents from "../MyComponent";
import { AnimationVariants, HTMLResponsiveComponent } from "responsive-component";
import { ComponentThemeProps } from "@/index";


const Button = <
    K extends AnimationVariants<any, C>,
    T extends HTMLResponsiveComponent = "button",
    C = undefined
>({
    as = ("button" as T),
    paletteColor= "primary",
    ...props
}: ComponentThemeProps<T, K, C>) => {

    const { palette } = useTheme()

    const currentPalette = (paletteColor && palette[paletteColor]) || palette["primary"]

    return (
        <MyComponents
            as={as}
            initial={{
                padding: 0,
            }}
            animate={{
                backgroundColor: currentPalette[600],
                padding: 12,
            }}
            style={{
                color: "#FFF",
                fontWeight: 600,
                fontSize: 16,
                borderRadius: 4,
                cursor: "pointer",
                border: `1px solid #FFF`,
                outline: "0px solid #fff",
                width : "min-content"
            }}
            whileHover = {{
                backgroundColor: currentPalette[500]
            }}
            whileTap={{
                scale: 0.9,
                backgroundColor: currentPalette[500],
                border: `1px solid ${currentPalette[600]}`,
            }}
            whileFocus={{
                transition: { duration: 0.1, type: "spring" },
                outline: `4px solid ${currentPalette[300]}`,
            }}
            {...props as any}
        />
    );
};


export default Button