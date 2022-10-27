import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ReactElement } from "react"
import { css } from "@emotion/react"

type LayoutProps = {
    children: ReactElement
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div css={styles.container}>
            <Header />
            <div css={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}

const styles = {
    container: css({
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        minHeight: "800px"
    }),
    content: css({
        maxWidth: "1366px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })
}
