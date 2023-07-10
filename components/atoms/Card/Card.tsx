import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type CardSizeType = "s" | "m" | "l" | string
type CardBackgroundColorType = "normal" | "light" | string
type CardBorderRadiusType = "s" | "m" | "l" | string

type CardProps = {
    width?: CardSizeType
    height?: CardSizeType
    backgroundColor?: CardBackgroundColorType
    borderRadius?: CardBorderRadiusType
    children: React.ReactNode
}

const Card = ({ width = "l", height = "l", backgroundColor = "normal", borderRadius = "l", children }: CardProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme, width, height, backgroundColor, borderRadius)
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

const getStyles = (theme: Theme, width: CardSizeType, height: CardSizeType, backgroundColor: CardBackgroundColorType, borderRadius: CardBorderRadiusType) => {
    return ({
        card: css({
            margin: theme.spacing[4],
            padding: theme.spacing[8],
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
