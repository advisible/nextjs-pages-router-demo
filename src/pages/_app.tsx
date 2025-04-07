import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AdkContainer } from '@advisible/adk-react'

import Menu from './menu'

import '../globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Next.js Pages Router demo | Advisible</title>
            </Head>
            <header>
                <h1>Advisible - Next.js Pages Router demo</h1>
                <Menu />
            </header>
            <Component {...pageProps} />
            <AdkContainer id="does-not-reload" />
        </>
    )
}
