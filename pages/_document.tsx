import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://cdn.local-advisible.com/adk-1.13.14.debug.js" />
      </Head>
      <body>
        <Main />
        <Script strategy='beforeInteractive' id='adkInit'>{`window.adk = window.adk || { cmd: [] };`}</Script>
        <Script strategy='beforeInteractive' id='adkSetup'>
          {`
          adk.cmd.push(function () {
            adk
              .config()
              .addContainer(
                "my-container",
                adk.container.config().provider("adk.hello")
                // adk.container.config().provider("adk.hello").unload().reload().params({ track: true })
              )
              .addContainer(
                "lazy-container",
                adk.container.config().provider("adk.hello").lazy()
              )
              .apply()
              .init("10121724");
          });
        `}
        </Script>
        <NextScript />
      </body>
    </Html>
  )
}
