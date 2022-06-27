import type { NextPage } from 'next'
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxHero from '../src/components/Home/ParallaxHero'
import { DevelopBy } from '../src/components/Home/DevelopBy';
import { Conversation } from '../src/components/Home/Conversation';
import { Announcements } from '../src/components/Home/Announcements';
import { PlayLearnEarn } from '../src/components/Home/PlayLearnEarn';
import styles from '../src/styles/home.module.scss';

const Home: NextPage = () => {

  return (
    <>
      <div className={styles.parallaxContainer}>
        <ParallaxProvider>
          <ParallaxHero />
        </ParallaxProvider>
        <div className={styles.ctaWrapper}>
          <div className={styles.bigCTASubject}>Enter the future of gaming!</div>
          <div className={styles.ctaSubject}>
            <i>from the creators and thoughts leaders behind</i>
          </div>
          <div className={styles.bigCTASubject}>
            League of Legends and Algorand
          </div>
          <div className={styles.ctaBtnWrapper}>
            <a className={styles.ctaBtn} href='https://discord.gg/JTnry5xubQ'>
              Join The Community
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

export default Home;
