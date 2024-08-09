
import { AllProps, HTMLMotionComponents, ResponsiveComponent } from "responsive-component"
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

