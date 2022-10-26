import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.css"
import { ReactElement } from "react"

type LayoutProps = {
    children: ReactElement
}


export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}