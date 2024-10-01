
import { useTheme } from "@/context/Theme.context"
import { Breakpoints } from "@/theme/breakpoints.theme"
import { AdaptedBreakpoints, AnimationVariants, HTMLResponsiveComponent, ResponsiveComponent, ResponsiveComponentProps } from "responsive-component"

type MyComponentProps<
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
> = Omit<ResponsiveComponentProps<T, AdaptedBreakpoints<Breakpoints>, K, C>, "breakpoints">

const MyComponent =
    <
        K extends AnimationVariants<any, C>,
        C = undefined,
        T extends HTMLResponsiveComponent = "div",
    >(
        props: MyComponentProps<T,K,C>,
    ) => {

        const { breakpoints } = useTheme()

        return <ResponsiveComponent breakpoints={breakpoints} {...props as any} />
    }

export type { MyComponentProps }
export default MyComponent

