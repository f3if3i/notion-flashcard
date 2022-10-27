import { css } from "@emotion/react"

const Footer = () => {
    return (
        <div css={styles.container}>Created by f3if3i / Powered by Vercel and Notion</div>
    )
}

const styles = {
    container: css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        fontSize: "8px",
        color: "rgba(0, 0, 0, 0.8)",
        backgroundColor: "#F5F5F5",
        position: "absolute",
        bottom: 0,
        width: "100%",
    })
}

export default Footer
