
import { css, useTheme } from "@emotion/react"

type ButtonProps = {
    size?: "small" | "medium" | "large"
    label: string
    onClick?: () => void
}

const Button = ({ size = "medium", label, onClick }: ButtonProps) => {
    const theme = useTheme()
    const styles = getStyles(theme)
    return (
        <button css={[styles.button]} onClick={onClick}>
            {label}
        </button>
    )
}

const getStyles = (theme: any) => {
    return ({
        button: css({
            borderRadius: "28px",
            color: theme.colors.secondary.main,
            backgroundColor: theme.colors.black.main,
            padding: "6px 16px",
            border: `solid 2px ${theme.colors.black.main}`,
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
            transition: "all 1s ease",
            ":hover": {
                borderRight: `solid 2px ${theme.colors.black.main}`,
                borderBottom: `solid 4px ${theme.colors.black.main}`,
            },
            alignSelf: "center",
            margin: "8px 28px 34px 28px",
            width: "120px",
            cursor: "pointer"
        }),
    })
}

export default Button
