import { AnimationVariants, HTMLResponsiveComponent, ResponsiveComponent } from "responsive-component"
import { MyComponentProps } from "../MyComponent"


const Title = <
    K extends AnimationVariants<any, C>,
    T extends HTMLResponsiveComponent = "h3",
    C = undefined
>({ as = "h3" as T, ...props }: MyComponentProps<T, K, C>) => {

    return (
        <ResponsiveComponent
            as={as}
            {...props as any}
        />
    )
}

export default Title