import { css, ThemeProvider } from "@emotion/react"
import { ReactElement } from "react"
import { theme } from "../../styles/theme"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

type LayoutProps = {
    children: ReactElement
}
export default function Layout({ children }: LayoutProps) {
    const styles = getStyles(theme)
    return (
        <ThemeProvider theme={theme}>
            <div css={styles.container}>
                <Header />
                <div css={styles.content}>{children}</div>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            backgroundColor: theme.colors.grey[100],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            minHeight: "600px"
        }),
        content: css({
            maxWidth: "1366px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        })
    })
}
