import { AllProps, HTMLMotionComponents } from "@/library/ResponsiveComponent"
import ResponsiveComponent from "@/library/ResponsiveComponent/ResponsiveComponent"

const Title = <T extends HTMLMotionComponents = "h3">({as = "h3" as T,...props}: AllProps<T>) => {

    return (
        <ResponsiveComponent
            as={as}
            {...props as any} 
        />
    )
}

export default Title