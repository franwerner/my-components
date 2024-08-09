type Palette = {
    [key: string]: {
        [shade: string]: string;
    }
};


const palette:Palette = {
    primary: {
        '50': '#edefff',
        '100': '#dee3ff',
        '200': '#c4cbff',
        '300': '#a0a8ff',
        '400': '#7a7aff',
        '500': '#665bf9',
        '600': '#573dee',
        '700': '#4b2fd3',
        '800': '#3d29aa',
        '900': '#362a89',
        '950': '#21184e',
    },
    "primary-2": {
        '50': '#eef8ff',
        '100': '#d8eeff',
        '200': '#b9e0ff',
        '300': '#89cfff',
        '400': '#52b4ff',
        '500': '#2a91ff',
        '600': '#0d6efd',
        '700': '#0c5ae9',
        '800': '#1149bc',
        '900': '#144194',
        '950': '#11295a',
    },
    danger: {
        '50': '#fef2f2',
        '100': '#fee6e5',
        '200': '#fccfcf',
        '300': '#f9a8a8',
        '400': '#f57779',
        '500': '#ec474f',
        '600': '#dc3545',
        '700': '#b7192c',
        '800': '#99182c',
        '900': '#83182c',
        '950': '#490812',
    }
}

type TPalette = keyof typeof palette


export type { TPalette }
export default palette