import { AllProps, HTMLMotionComponents } from "@/library/ResponsiveComponent/index";

export type InitialProps<T extends HTMLMotionComponents> = {
    palette?: string
    darkMode?: boolean
} & AllProps<T>