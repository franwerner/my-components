import { AnimatePresence } from "framer-motion";
import MyComponent, { MyComponentProps } from "./MyComponent";
import { AnimationVariants, HTMLResponsiveComponent } from "responsive-component";

type BackDropVariant = "static" | boolean

type BackdropProps<
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
> = {
    onClose?: () => void
    type?: BackDropVariant
} & MyComponentProps<T, K, C>

const Backdrop = <
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
>({
    type,
    onClose = () => { },
    ...props
}: BackdropProps<T, K, C>) => {

    const isStatic = type === "static" ? () => { } : onClose

    return (
        <AnimatePresence>
            {
                type && <MyComponent
                    onClick={isStatic}
                    initial={{ scale: 0 }}
                    animate={{ backgroundColor: "#00000091", scale: [0, 0.5, 0.7, 1] }}
                    style={{ position: "fixed", height: "100vh", width: "100vw", right: 0, top: 0 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    exit={{ scale: [0.7, 0.5, 0], backgroundColor: "#00000070" }}
                    {...(props as any)}
                />
            }
        </AnimatePresence>
    );
};


export type { BackDropVariant }
export default Backdrop