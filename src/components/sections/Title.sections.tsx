import { AllProps, HTMLMotionComponents, ResponsiveComponent } from "responsive-component"


const Title = <T extends HTMLMotionComponents = "h3">({as = "h3" as T,...props}: AllProps<T>) => {

    return (
        <ResponsiveComponent
            as={as}
            {...props as any} 
        />
    )
}

export default Title