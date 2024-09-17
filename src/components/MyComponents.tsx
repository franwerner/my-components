
import { ResponsiveComponent } from "responsive-component"
import { AllProps, HTMLMotionComponents } from "responsive-component/types"

const breakPointDefault = {
    "xs": 440,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536,
}


/**
 * @description
 * Este es el component generico por el cual estan hecho la base de todos los componentes.
 */

const MyComponents =
    <T extends HTMLMotionComponents>(
        props: Omit<AllProps<T>,"breakpoints">,
    ) => {
        return <ResponsiveComponent breakpoints={breakPointDefault} {...props as any} />
    }

export default MyComponents

