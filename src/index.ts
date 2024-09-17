import { AllProps, HTMLMotionComponents } from "f";

export type InitialProps<T extends HTMLMotionComponents> = {
    palette?: string
    darkMode?: boolean
} & AllProps<T>