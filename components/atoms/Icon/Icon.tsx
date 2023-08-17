import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import { IconType } from "react-icons/lib"

type IconProps = {
    IconComponent: IconType
    color?: "default" | "error" | "success"
}

const Icon = ({ IconComponent, color = "default" }: IconProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme, color)
    return (
        <div css={styles.container}><IconComponent size={theme.spacing[6]} /></div>
    )
}

const getBackgroundColor = (theme: Theme, color: "default" | "error" | "success") => {
    switch (color) {
        case "default":
            return theme.colors.secondary.main
        case "error":
            return theme.colors.error.main
        case "success":
            return theme.colors.success.main
    }
}

const getColor = (theme: Theme, color: "default" | "error" | "success") => {
    switch (color) {
        case "default":
            return theme.colors.black.main
        case "error":
            return theme.colors.white
        case "success":
            return theme.colors.white
    }
}

const getStyles = (theme: Theme, color: "default" | "error" | "success") => {
    return ({
        container: css({
            borderRadius: theme.borderRadius[8],
            backgroundColor: getBackgroundColor(theme, color),
            color: getColor(theme, color),
            width: theme.spacing[9],
            height: theme.spacing[9],
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        })
    })
}

export default Icon
