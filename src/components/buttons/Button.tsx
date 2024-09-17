import { getTheme } from "@/context/Theme.context";
import { HTMLMotionComponents } from "responsive-component";
import MyComponents from "../MyComponents";
import { InitialProps } from "../..";


const Button = <T extends HTMLMotionComponents = "button">({
    as = ("button" as T),
    style,
    animate,
    initial,
    whileTap,
    whileFocus,
    palette:paletteInput = "primary",
    ...props
}: InitialProps<T>) => {

    const { palette } = getTheme()

    const currentPalette = (paletteInput && palette[paletteInput]) || palette["primary"]

    return (
        <MyComponents
            as={as}
            initial={{
                padding: 0,
                ...initial
            }}
            animate={{
                backgroundColor: currentPalette[600],
                padding: 12,
                ...animate
            }}
            style={{
                color: "#FFF",
                fontWeight: 600,
                fontSize: 16,
                borderRadius: 4,
                cursor: "pointer",
                border: `1px solid #FFF`,
                outline: "0px solid #fff",
                ...style
            }}
            whileTap={{
                scale: 0.9,
                backgroundColor: currentPalette[500],
                border: `1px solid ${currentPalette[600]}`,
                ...whileTap
            }}
            whileFocus={{
                transition: { duration: 0.1, type: "spring" },
                outline: `4px solid ${currentPalette[300]}`,
                ...whileFocus,
            }}
            {...props as any}
        />
    );
};


export default Button