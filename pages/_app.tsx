import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import Layout from '../src/components/Layout'
import '../src/styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RedCat Multiverse by RCM Labs</title>
      </Head>
      <ThemeProvider enableSystem={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
