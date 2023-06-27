import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type TypographyVariantType = "body1"

type TypographyProps = {
    variant: TypographyVariantType
    color?: string
    children: React.ReactNode
}

const Typography = ({ variant, color, children }: TypographyProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(color ?? theme.colors.black.main)
    return (
        <div css={[styles.container, theme.typography[variant]]}>{children}</div>
    )
}

const getStyles = (color: string) => {
    return ({
        container: css({
            color
        })
    })
}

export default Typography
