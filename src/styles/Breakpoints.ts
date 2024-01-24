interface ISize {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
}

const size: ISize = {
    xs: '375px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '768px', // for tablets
    lg: '1024px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
}

export const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
}
