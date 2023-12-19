import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script strategy="beforeInteractive" id="adkInit">{'window.adk = window.adk || { cmd: [] };'}</Script>
                <Script strategy="beforeInteractive" src="/main.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
