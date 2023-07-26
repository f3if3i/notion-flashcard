import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import { IconType } from "react-icons/lib"

type IconProps = {
    IconComponent: IconType
}

const Icon = ({ IconComponent }: IconProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.container}><IconComponent size={theme.spacing[6]} /></div>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            borderRadius: theme.borderRadius[8],
            backgroundColor: theme.colors.secondary.main,
            width: theme.spacing[9],
            height: theme.spacing[9],
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        })
    })
}

export default Icon
