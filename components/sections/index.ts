import Body from "./Body.sections"
import Footer from "./Footer.sections"
import Header from "./Header.sections"
import Title from "./Title.sections"

interface ISections {
    Header: typeof Header
    Footer: typeof Footer
    Body: typeof Body
    Title: typeof Title
}

export type {ISections}