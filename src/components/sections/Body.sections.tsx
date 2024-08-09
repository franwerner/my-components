import { AllProps, HTMLMotionComponents,ResponsiveComponent } from "responsive-component";

const Body = <T extends HTMLMotionComponents = "div">(
    {
        style,
        ...props
    }: AllProps<T>) => {

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