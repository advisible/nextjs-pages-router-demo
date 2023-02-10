import { Layout } from '@/components/Layout'
import { AdkProvider } from '@/adk/useAdk'
import type { AppProps } from 'next/app'
import '../styles/style.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AdkProvider>
  )
}
