import { AllProps, HTMLMotionComponents } from "responsive-component";

export type InitialProps<T extends HTMLMotionComponents> = {
    palette?: string
    darkMode?: boolean
} & AllProps<T>