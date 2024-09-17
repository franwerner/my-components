import { Breakpoints as BK } from "responsive-component";

type PaletteTones = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950"
type PaletteColors = "primary" | "secondary" | "success" | "danger" | "warning" | "info"

type PaletteItem = { [K in PaletteTones]?: string };

type Palette = {
    [K in PaletteColors]: PaletteItem;
};

type Breakpoints = {
    [K in BK]: number
}

interface Theme {
    palette: Palette,
    breakpoints: Breakpoints
}


export type { Palette, PaletteColors, PaletteTones, Breakpoints, Theme }