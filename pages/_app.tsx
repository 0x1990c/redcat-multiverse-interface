/* eslint-disable @next/next/next-script-for-ga */
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../src/components/Layout';
import '../src/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>RedCat Multiverse I Play, Learn, Earn {t('header.roadmap')}</title>
        <meta
          name="description"
          content="www.redcatmultiverse.io"
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://www.redcatmultiverse.io/images/theredcat.png" />
        <meta
          name="twitter:description"
          content={`Find out about the future of games and future of learning with RedCat Multiverse’s Play, Learn and Earn model. We are adding deeper rewards to players' gaming efforts, creating both intrinsic and extrinsic value. Players will earn financial rewards as they build new skills. ${t('header.roadmap')}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`RedCat Multiverse, the world’s first Play, Learn and Earn blockchain game ${t('header.roadmap')}`} />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-232229679-1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-232229679-1');
          `}
        </script>
        {/* Google Tag Manager */}
        <script>{`
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KS2MRTS');
        `}</script>
        {/* Hotjar */}
        <script>
          {`
            (function(h,o,t,j,a,r){
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings={hjid:3025718,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      </Head>
      <ThemeProvider enableSystem={true}>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS2MRTS" height="0" width="0"></iframe>
        </noscript>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  }
})

export default appWithTranslation(MyApp)
