
import { createContext, useContext } from "react";
import { AnimationVariants, HTMLResponsiveComponent } from "responsive-component";
import Xmark from "../Icons/Xmark.icon";
import MyComponent, { MyComponentProps } from "../MyComponent";

type THeaderContext = (() => void) | false | undefined

type HeaderProps<
    K extends AnimationVariants<any, C>,
    T extends HTMLResponsiveComponent,
    C = undefined,
> = {
    closeButton?: boolean
} & MyComponentProps<T, K, C>

const HeaderContext = createContext<THeaderContext>(undefined)

const Header = <
    K extends AnimationVariants<any, C>,
    T extends HTMLResponsiveComponent,
    C = undefined,
>({
    children,
    closeButton = true,
    style,
    ...props
}: HeaderProps<K, T, C>) => {

    const onClose = useContext(HeaderContext)

    return (
        <MyComponent
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 2,
                padding: 10,
                borderBottom: "2px solid #d1d1d1",
                ...style
            }}
            {...props as any}
        >
            {children}
            {closeButton && <Xmark onClick={onClose} />}
        </MyComponent>
    );
};

export { HeaderContext };
export type { HeaderProps };
export default Header