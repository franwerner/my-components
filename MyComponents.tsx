import { AllProps, HTMLMotionComponents } from "../ResponsiveComponent/src";
import ResponsiveComponent from "../ResponsiveComponent/src/ResponsiveComponent";

/**
 * @description
 * Este es el component generico por el cual estan hecho la base de todos los componentes.
 */

const MyComponents =
    <T extends HTMLMotionComponents>(
        props: AllProps<T>,
    ) => {
        return <ResponsiveComponent {...props}  />
    }

export default MyComponents

