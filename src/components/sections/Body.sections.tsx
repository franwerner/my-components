import { AnimationVariants, HTMLResponsiveComponent, ResponsiveComponent } from "responsive-component";
import { MyComponentProps } from "../MyComponent";

const Body = <
    T extends HTMLResponsiveComponent,
    K extends AnimationVariants<any, C>,
    C = undefined,
>(
    {
        style,
        ...props
    }: MyComponentProps<T,K,C>) => {

    return (
        <ResponsiveComponent
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                ...style
            }}
            {...props as any}
        />
    );
};

export default Body