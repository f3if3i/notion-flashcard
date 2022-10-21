import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ReactElement } from "react"

type LayoutProps = {
		children: ReactElement
}


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}