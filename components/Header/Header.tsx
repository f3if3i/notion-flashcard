import { css } from "@emotion/react"

const Header = () => {
    return (
        <div css={styles.container}>🚀 0.1.0 released</div>
    )
}

const styles = {
    container: css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgb(0, 0, 0)",
        padding: "0.3rem",
        color: "white",
        width: "100%",
        textAlign: "center"
    })
}

export default Header