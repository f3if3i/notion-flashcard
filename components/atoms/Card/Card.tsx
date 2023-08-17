import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type CardSizeType = "s" | "m" | "l" | string
type CardBackgroundColorType = "normal" | "light" | string
type CardBorderRadiusType = "s" | "m" | "l" | string
type CardPaddingType = "s" | "m" | "l" | string
type CardMarginType = "s" | "m" | "l" | string

type CardProps = {
    width?: CardSizeType
    height?: CardSizeType
    padding?: CardPaddingType
    margin?: CardMarginType
    backgroundColor?: CardBackgroundColorType
    borderRadius?: CardBorderRadiusType
    children: React.ReactNode
}

const Card = ({ width = "l", height = "l", backgroundColor = "normal", borderRadius = "l", padding = "l", margin = "l", children }: CardProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme, width, height, backgroundColor, borderRadius, padding, margin)
    return (
        <div css={styles.card}>{children}</div>
    )
}

const getSize = (theme: Theme, size: CardSizeType) => {
    if (size === "s") {
        return theme.spacing[12]
    } else if (size === "m") {
        return theme.spacing[12]
    } else if (size === "l") {
        return theme.spacing[12]
    }
    return size
}

const getBackgroundColor = (theme: Theme, backgroundColor: CardBackgroundColorType) => {
    if (backgroundColor === "normal") {
        return theme.colors.grey[200]
    } else if (backgroundColor === "light") {
        return theme.colors.grey[100]
    }
    return backgroundColor
}

const getBorderRadius = (theme: Theme, borderRadius: CardBorderRadiusType) => {
    if (borderRadius === "s") {
        return theme.borderRadius[3]
    } else if (borderRadius === "m") {
        return theme.borderRadius[5]
    } else if (borderRadius === "l") {
        return theme.borderRadius[7]
    }
    return borderRadius
}

const getPadding = (theme: Theme, padding: CardPaddingType) => {
    if (padding === "s") {
        return theme.spacing[2]
    } else if (padding === "m") {
        return theme.spacing[5]
    } else if (padding === "l") {
        return theme.spacing[8]
    }
    return padding
}

const getMargin = (theme: Theme, margin: CardPaddingType) => {
    if (margin === "s") {
        return theme.spacing[1]
    } else if (margin === "m") {
        return theme.spacing[3]
    } else if (margin === "l") {
        return theme.spacing[4]
    }
    return margin
}

const getStyles = (theme: Theme, width: CardSizeType, height: CardSizeType, backgroundColor: CardBackgroundColorType, borderRadius: CardBorderRadiusType, padding: CardPaddingType, margin: CardMarginType) => {
    return ({
        card: css({
            margin: getMargin(theme, margin),
            padding: getPadding(theme, padding),
            width: getSize(theme, width),
            height: getSize(theme, height),
            border: `1px solid ${theme.colors.grey[300]}`,
            borderRadius: getBorderRadius(theme, borderRadius),
            backgroundColor: getBackgroundColor(theme, backgroundColor),
            boxSizing: "border-box"
        }),
    })
}

export default Card
