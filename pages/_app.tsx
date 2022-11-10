import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import type { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import store from "../store/store"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)
}

