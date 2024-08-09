import { AllProps } from "responsive-component";
import MyComponents from "../MyComponents";

type TBaseIcon = Omit<AllProps<'svg'>, 'as'>;

const BaseIcon = (props: TBaseIcon) => <MyComponents as="svg" {...props} />

export type { TBaseIcon }
export default BaseIcon