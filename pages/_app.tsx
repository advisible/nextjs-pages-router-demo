import type { AppProps } from 'next/app'
import { AdkProvider } from '@advisible/adk-nextjs'

import { Layout } from '@/components/Layout'
import '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AdkProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AdkProvider>
    )
}
