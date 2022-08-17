import type { NextPage } from 'next'
import { ParallaxProvider } from 'react-scroll-parallax';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ParallaxHero from '../src/components/Home/ParallaxHero'
import { DevelopBy } from '../src/components/Home/DevelopBy';
import { Conversation } from '../src/components/Home/Conversation';
import { Announcements } from '../src/components/Home/Announcements';
import { PlayLearnEarn } from '../src/components/Home/PlayLearnEarn';
import styles from '../src/styles/home.module.scss';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={styles.parallaxContainer}>
        <ParallaxProvider>
          <ParallaxHero />
        </ParallaxProvider>
        <div className={styles.ctaWrapper}>
          <div className={styles.bigCTASubject}>Enter the future of gaming</div>
          <div className={styles.ctaSubject}>
            <i>from the creators and thought leaders behind</i>
          </div>
          <div className={styles.bigCTASubject}>
            League of Legends and Algorand
          </div>
          <div className={styles.ctaBtnWrapper}>
            <a className={styles.ctaBtn} href='https://discord.gg/JTnry5xubQ'>
              {t('cta.btnLabel')}
            </a>
          </div>
        </div>
      </div>
      <DevelopBy />
      <Conversation />
      <Announcements />
      <PlayLearnEarn />
    </>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home'])
  }
})

export default Home;
