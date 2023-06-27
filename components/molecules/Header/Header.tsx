import { css, useTheme } from "@emotion/react"

type HeaderProps = {
    releaseNote: string
}

const Header = ({ releaseNote }: HeaderProps) => {
    const theme = useTheme()
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>{releaseNote}</div>
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.colors.black.main,
            padding: "0.3rem",
            color: "white",
            width: "100%",
            textAlign: "center"
        })
    })
}

export default Header
