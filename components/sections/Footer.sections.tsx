import { AllProps, HTMLMotionComponents } from "@/library/ResponsiveComponent"
import ResponsiveComponent from "@/library/ResponsiveComponent/ResponsiveComponent"

const Footer = <T extends HTMLMotionComponents = "div">(
    {
        style,
        ...props
    }: AllProps<T>) => {

    return (
        <ResponsiveComponent
            style={{
                borderTop: "2px solid #d1d1d1",
                padding : 30,
                ...style
            }}
            {...props as any}
        />
    )
}

export default Footer