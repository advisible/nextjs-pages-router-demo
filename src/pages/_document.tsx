import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

/*
 * When using Advisible Managed Integration, you will load
 * a main script that bootstraps the ad integration.
 * Make sure to use afterInteractive to load the script.
 *
 * https://docs.advisible.com/native-ads/managed-integration
 */

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script strategy="afterInteractive" src="/main.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
