
import { createContext, ReactNode, useContext } from "react";
import Xmark from "../Icons/Xmark.icon";
import { AllProps, HTMLMotionComponents, ResponsiveComponent } from "responsive-component";

type THeaderContext = (() => void) | false | undefined

type HeaderProps<T extends HTMLMotionComponents> = {
    closeButton?: boolean
    iconCloseButton?: <T>(props: T) => ReactNode
} & AllProps<T>

const HeaderContext = createContext<THeaderContext>(undefined)

const Header = <T extends HTMLMotionComponents = "div">({
    children,
    closeButton = true,
    iconCloseButton: IconCloseButton,
    style,
    ...props
}: HeaderProps<T>) => {
    
    const onClose = useContext(HeaderContext)

    const verification = typeof onClose === "function" && closeButton

    return (
        <ResponsiveComponent
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 2,
                padding: 10,
                borderBottom: "2px solid #d1d1d1",
                ...style
            }}
            {...props as any}
        >
            {children}
            {verification && (IconCloseButton ? <IconCloseButton onClick={onClose} /> : <Xmark onClick={onClose} />)}
        </ResponsiveComponent>
    );
};

export { HeaderContext }
export type { HeaderProps }
export default Header