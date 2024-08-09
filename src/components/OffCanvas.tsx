import { AnimatePresence } from "framer-motion"
import Backdrop, { BackDropVariant } from "./Backdrop"
import Body from "./sections/Body.sections"
import Footer from "./sections/Footer.sections"
import Header, { HeaderContext } from "./sections/Header.sections"
import Title from "./sections/Title.sections"
import { ISections } from "./sections/sections.type"
import MyComponent from "./MyComponents"
import { HTMLMotionComponents } from "responsive-component"
import { createPortal } from "react-dom"
import { isString } from "my-utilities"
import useKeyboard from "../hooks/useKeyboard.hook"

interface OffCanvasProps {
    backdrop?: BackDropVariant
    show?: boolean
    onClose?: () => void
    keyboard?: boolean | string
    as?: HTMLMotionComponents,
    children?: React.ReactNode | string
    placement?: "left" | "right",
}

const _OffCanvas = ({
    children,
    as,
    backdrop = true,
    show,
    onClose,
    keyboard,
    placement = "left",
    ...props
}: OffCanvasProps) => {

    const isActive = show && !!keyboard
    const key = isString(keyboard) ? keyboard : "escape"

    useKeyboard({ action: onClose, isActive, key })

    const side = {
        right: placement === "right" ? "-100%" : "auto",
        left: placement === "left" ? "-100%" : "auto"
    }

    return createPortal(
        <HeaderContext.Provider value={onClose}>
            <Backdrop
                onClose={onClose}
                type={show && backdrop}
            />
            <AnimatePresence>
                {show &&
                    <MyComponent
                        as={as}
                        style={{
                            position: "absolute",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            overflowX: "hidden",
                            justifyContent: "space-between",
                            backgroundColor: "#FFF",
                            top: 0,
                            boxShadow: "5px 10px 5px 0px rgba(0,0,0,0.20)",
                        }}
                        initial={{
                            ...side
                        }}
                        animate={{
                            right: placement === "right" ? "0%" : "auto",
                            left: placement === "left" ? "0" : "auto",
                        }}
                        exit={{
                            ...side
                        }}
                        transition={{ duration: 0.4 }}
                        {...props}
                    >
                        {children}
                    </MyComponent>
                }
            </AnimatePresence>
        </HeaderContext.Provider >
        ,
        document.body
    )
}

const OffCanvas = _OffCanvas as typeof _OffCanvas & ISections

OffCanvas.Header = Header
OffCanvas.Footer = Footer
OffCanvas.Body = Body
OffCanvas.Title = Title

export type { OffCanvasProps }
export default OffCanvas