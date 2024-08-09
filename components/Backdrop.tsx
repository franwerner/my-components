import { AnimatePresence } from "framer-motion";
import { InitialProps } from "..";
import MyComponent from "../MyComponents";
import { HTMLMotionComponents } from "@/library/ResponsiveComponent";

type BackDropVariant = "static" | boolean

type BackdropProps<T extends HTMLMotionComponents> = {
    onClose?: () => void
    type?: BackDropVariant
} & InitialProps<T>

const Backdrop = <T extends HTMLMotionComponents = "div">({
    type,
    onClose = () => { },
    initial,
    animate,
    style,
    transition,
    exit,
    ...props
}: BackdropProps<T>) => {

    const isStatic = type === "static" ? () => { } : onClose 

    return (
        <AnimatePresence>
            {
                type && <MyComponent
                    onClick={isStatic}
                    initial={{ scale: 0, ...initial }}
                    animate={{ backgroundColor: "#00000091", scale: [0, 0.5, 0.7, 1], ...animate }}
                    style={{ position: "fixed", height: "100vh", width: "100vw", right: 0, top: 0, ...style }}
                    transition={{ duration: 0.7, type: "spring", ...transition }}
                    exit={{ scale: [0.7, 0.5, 0],backgroundColor : "#00000070",...exit }}
                    {...props}
                />
            }
        </AnimatePresence>
    );
};


export type {BackDropVariant}
export default Backdrop