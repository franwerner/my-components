import { useTheme } from "@/context/Theme.context";
import { AnimatePresence } from "framer-motion";
import { isObject, isString } from "my-utilities";
import { ReactNode } from "react";
import { HTMLResponsiveComponent, useMediaQuery } from "responsive-component";
import MyComponent from "./MyComponent";
import OffCanvas, { OffCanvasProps } from "./OffCanvas";
import Body from "./sections/Body.sections";
import Footer from "./sections/Footer.sections";
import Header, { HeaderContext } from "./sections/Header.sections";
import { ISections } from "./sections/sections.type";
import Title from "./sections/Title.sections";
import { Breakpoints } from "@/theme/breakpoints.theme";

interface SideBarProps {
    offCanvas?: {
        breakpoint?: keyof Breakpoints
    } & OffCanvasProps
    onSmallmode?: () => void
    smallMode?: boolean
    as?: HTMLResponsiveComponent
    children?: ReactNode
}

const _SideBar = ({
    as = "aside",
    children,
    offCanvas = {},
    onSmallmode,
    smallMode,
    ...props
}: SideBarProps) => {

    const { breakpoints } = useTheme()
    const offCanvasActive = offCanvas?.breakpoint

    const offCanvasVerification = isString(offCanvasActive) && offCanvasActive in breakpoints

    const getBreakpoint = offCanvasVerification && breakpoints[offCanvasActive].maxWidth

    const mediaQuery = useMediaQuery({ sideBar: { maxWidth: getBreakpoint } })

    const IsModeoffCanvas = (mediaQuery.sideBar.matches)

    const isSmallMode = smallMode ? { width: 150 } : {}

    return (
        <>
            <OffCanvas
                children={children}
                {...(isObject(offCanvas) ? offCanvas : {})}
                show={offCanvas.show && IsModeoffCanvas}
                {...props}
            />
            <AnimatePresence>
                {
                    !IsModeoffCanvas &&
                    <HeaderContext.Provider value={smallMode && onSmallmode}>
                        <MyComponent
                            as={as}
                            animate={{ x: 0, ...isSmallMode }}
                            transition={{ duration: 0.2 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                overflowY: "auto",
                                overflowX: "hidden",
                                height: "100%",
                                top: 0,
                                left: 0,
                                width: 300,
                                border: "2px solid #555",
                                boxShadow: "5px 10px 3px 0px rgba(0,0,0,0.20)",
                            }}
                            {...props}
                        >
                            {children}
                        </MyComponent>
                    </HeaderContext.Provider>
                }
            </AnimatePresence>
        </>
    );
}

const SideBar = _SideBar as typeof _SideBar & ISections
SideBar.Header = Header
SideBar.Footer = Footer
SideBar.Body = Body
SideBar.Title = Title

export default SideBar


