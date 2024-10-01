import { AnimationVariants } from "responsive-component";
import MyComponents, { MyComponentProps } from "../MyComponent";

type BaseIconProps<K extends AnimationVariants<any, C>, C = undefined> = Omit<MyComponentProps<'svg', K, C>, 'as'>;

const BaseIcon =<
    K extends AnimationVariants<any,C>,
    C = undefined
> (props: BaseIconProps<K,C>) => <MyComponents as="svg" {...props} />

export type { BaseIconProps }
export default BaseIcon