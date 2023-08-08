import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type TypographyVariantType = "body1" | "body2" | "h4" | "h5" | "h6"

type TypographyProps = {
    variant: TypographyVariantType
    color?: string
    fontWeight?: string
    customCss?: any
    children: React.ReactNode
}

const Typography = ({ variant, color, fontWeight, customCss, children }: TypographyProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(color ?? theme.colors.black.main, fontWeight ?? "400")
    return (
        <div css={[theme.typography[variant], styles.container, customCss]}>{children}</div>
    )
}

const getStyles = (color: string, fontWeight: string) => {
    return ({
        container: css({
            color,
            fontWeight,
            whiteSpace: "nowrap",
            // width: "80px",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
        })
    })
}

export default Typography
