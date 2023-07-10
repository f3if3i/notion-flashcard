import { css, ThemeProvider } from "@emotion/react"
import { ReactElement } from "react"
import { defaultTheme } from "../../styles/theme"
import Footer from "../molecules/Footer/Footer"
import Header from "../molecules/Header/Header"

type LayoutProps = {
    children: ReactElement
}
export default function Layout({ children }: LayoutProps) {
    const styles = getStyles(defaultTheme)
    return (
        <ThemeProvider theme={defaultTheme}>
            <div css={styles.container}>
                <Header releaseNote={"🚀 0.1.1 released"} />
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
