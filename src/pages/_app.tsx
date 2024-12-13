import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { AdkContainer, useAdkReset } from '@advisible/adk-react'
import { Logo } from '@/components/Logo'

import '../base.css'

const LINKS = [
    { href: '/', label: 'Static route' },
    { href: '/dynamic/1', label: 'Dynamic route' },
]

export default function App({ Component, pageProps }: AppProps) {
    /*
     * When using dynamic routes, make sure to use `asPath` as input to useAdkReset
     * since `pathname` does not change between dynamic routes.
     */
    const { asPath } = useRouter()
    useAdkReset(asPath)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <title>Next.js demo | Advisible</title>
            </Head>
            <header>
                <div className="logo-container">
                    <Logo />
                    <span className="logo-label">Advisible | Next.js demo</span>
                </div>
                <nav>
                    {LINKS.map(({ href, label }) =>
                        <Link
                            key={href}
                            href={href}
                            className={`nav-link ${(href === asPath ? 'nav-link--current' : '')}`}
                        >
                            {label}
                        </Link>,
                    )}
                </nav>
            </header>
            <main>
                <Component {...pageProps} />
                <AdkContainer id="does-not-reload" />
            </main>
        </>
    )
}
