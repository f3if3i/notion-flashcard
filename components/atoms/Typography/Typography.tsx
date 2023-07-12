import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type TypographyVariantType = "body1" | "body2"

type TypographyProps = {
    variant: TypographyVariantType
    color?: string
    fontWeight?: string
    children: React.ReactNode
}

const Typography = ({ variant, color, fontWeight, children }: TypographyProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(color ?? theme.colors.black.main, fontWeight ?? "400")
    return (
        <div css={[theme.typography[variant], styles.container]}>{children}</div>
    )
}

const getStyles = (color: string, fontWeight: string) => {
    return ({
        container: css({
            color,
            fontWeight
        })
    })
}

export default Typography
