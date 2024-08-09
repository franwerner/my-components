import isString from "@/library/myHelpers/isString";
import { BreakPointsKeys, breakPoints } from "@/library/ResponsiveComponent/constant/breakpoints.constant";
import useMediaQuery from "@/library/ResponsiveComponent/hooks/useMediaQuery.hook";
import { AnimatePresence } from "framer-motion";
import useSyncBreakPointWithMaxAndMin from "../hooks/useSyncBreakPointWithMaxAndMin";
import MyComponent from "../MyComponents";
import OffCanvas, { OffCanvasProps } from "./OffCanvas";
import { ISections } from "./sections";
import Body from "./sections/Body.sections";
import Footer from "./sections/Footer.sections";
import Header, { HeaderContext } from "./sections/Header.sections";
import Title from "./sections/Title.sections";
import { HTMLMotionComponents } from "@/library/ResponsiveComponent";
import { ReactNode } from "react";
import isObject from "@/library/myHelpers/isObject";

interface SideBarProps {
    offCanvas?: {
        breakpoint?: BreakPointsKeys 
    } & OffCanvasProps
    onSmallmode?: () => void
    smallMode?: boolean
    as?: HTMLMotionComponents
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

    const offCanvasActive = offCanvas?.breakpoint

    const offCanvasVerification = isString(offCanvasActive) && offCanvasActive in breakPoints

    const getBreakpoint = offCanvasVerification && breakPoints[offCanvasActive].maxWidth

    const lastestBreakPoint = useSyncBreakPointWithMaxAndMin({ breakPoint: offCanvasVerification && offCanvasActive, maxWidth: true })

    const isSync = lastestBreakPoint === offCanvasActive

    const mediaQuery = useMediaQuery({ sideBar: { maxWidth: getBreakpoint } })

    const IsModeoffCanvas = (isSync || mediaQuery.sideBar.matches || !offCanvasActive)

    const isSmallMode = smallMode ? { width: 150 } : {}

    return (
        <>
            <OffCanvas
                children={children}
                {...(isObject(offCanvas) ? offCanvas : {})}
                show = {offCanvas.show && IsModeoffCanvas}
                {...props}
            />
            <AnimatePresence>
                {
                    !IsModeoffCanvas &&
                    <HeaderContext.Provider value={smallMode && onSmallmode}>
                        <MyComponent
                            as={as}
                            animate={{ x: 0, ...isSmallMode }}
                            exit={{ x: -300, zIndex: -1 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                overflowY: "auto",
                                overflowX: "hidden",
                                heigth : "100%",
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


