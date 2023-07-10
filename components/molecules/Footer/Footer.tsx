import { css, useTheme } from "@emotion/react"

const Footer = () => {
    const theme = useTheme()
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>Created by f3if3i / Powered by Vercel and Notion</div>
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
            fontSize: "8px",
            color: theme.colors.shadow[200],
            backgroundColor: theme.colors.grey[100],
            position: "absolute",
            bottom: 0,
            width: "100%",
        })
    })
}

export default Footer

