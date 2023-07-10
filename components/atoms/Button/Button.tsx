
import { css, useTheme } from "@emotion/react"
import Typography from "../Typography/Typography"
import { Theme } from "../../../styles/theme"

type ButtonSizeType = "small" | "medium" | "large"
type ButtonVariantType = "contained"
type ButtonShapeType = "rounded" | "squared"
type ButtonColorType = "normal" | "light"

type ButtonProps = {
    size?: ButtonSizeType
    variant?: ButtonVariantType
    shape?: ButtonShapeType
    color?: ButtonColorType | string
    backgroundColor?: ButtonColorType | string
    isAnimated?: boolean
    label: string
    onClick?: () => void
}

const Button = ({ size = "medium", variant = "contained", shape = "rounded", label, color, backgroundColor, isAnimated = true, onClick }: ButtonProps) => {
    const theme = useTheme() as Theme
    const styles = getStylesButton(theme, size, variant, shape, color, backgroundColor, isAnimated)
    const fontSize = getFontSize(size)

    return (
        <button css={[styles.button]} onClick={onClick} >
            <Typography
                variant={fontSize}
                color={getColor(theme, color)}
            >
                {label}
            </Typography>
        </button>
    )
}

const getFontSize = (size: ButtonSizeType) => {
    if (size === "large") {
        return "body1"
    }
    return "body2"
}

const getStylesButton = (theme: Theme, size: ButtonSizeType, variant: ButtonVariantType, shape: ButtonShapeType, color?: ButtonColorType | string, backgroundColor?: ButtonColorType | string, isAnimated?: boolean) => {
    return ({
        button: css({
            borderRadius: shape === "rounded" ? theme.borderRadius[7] : theme.borderRadius[3],
            backgroundColor: getBackgroundColor(theme, backgroundColor),
            padding: getPadding(shape, size),
            border: getBorder(theme, backgroundColor),
            cursor: "pointer",
            ...(isAnimated ? {
                transition: "all 1s ease",
                ":hover": {
                    borderRight: `solid 2px ${getBackgroundColor(theme, backgroundColor)}`,
                    borderBottom: `solid 3px ${getBackgroundColor(theme, backgroundColor)}`,
                },
            } : {}),
        })
    })
}

const getColor = (theme: Theme, color?: ButtonColorType | string) => {
    if (color === "normal") {
        return theme.colors.secondary.main
    } else if (color === "light") {
        return theme.colors.black.main
    } else if (color) {
        return color
    }
    return theme.colors.secondary.main
}

const getBackgroundColor = (theme: Theme, color?: ButtonColorType | string) => {
    if (color === "normal") {
        return theme.colors.black.main
    } else if (color === "light") {
        return theme.colors.secondary.main
    } else if (color) {
        return color
    }
    return theme.colors.black.main
}

const getPadding = (shape: ButtonShapeType, size: ButtonSizeType) => {
    if (shape === "rounded") {
        if (size === "small") {
            // TODO
            return "4px 10px"
        } else if (size === "medium") {
            return "8px 16px"
        } else if (size === "large") {
            // TODO
            return "4px 10px"
        }
    } else {
        if (size === "small") {
            // TODO
            return "6px 16px"
        } else if (size === "medium") {
            // TODO
            return "8px 16px"
        } else if (size === "large") {
            return "12px 28px"
        }
    }
}
const getBorder = (theme: Theme, color?: ButtonColorType | string) => {
    if (color === "normal") {
        return `solid 2px ${theme.colors.black.main}`
    } else if (color === "light") {
        return `solid 2px ${theme.colors.secondary.main}`
    } else if (color) {
        return `solid 2px ${color}`
    }
    return `solid 2px ${theme.colors.black.main} `
}

export default Button
