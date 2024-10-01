import { AnimationVariants, HTMLResponsiveComponent, ResponsiveComponent } from "responsive-component"
import { MyComponentProps } from "../MyComponent"

const Footer = <
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
>(
    {
        style,
        ...props
    }: MyComponentProps<T, K, C>) => {

    return (
        <ResponsiveComponent
            style={{
                borderTop: "2px solid #d1d1d1",
                padding: 30,
                ...style
            }}
            {...props as any}
        />
    )
}

export default Footer