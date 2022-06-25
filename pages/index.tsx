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
        {/* <div className={styles.ctaWrapper}>
          <div className={styles.bigCTASubject}>
            From the creators and thought leaders behind League Of Legends and Algorand
          </div>
          <div className={styles.ctaSubject}>Enter the future of gaming</div>
          <div className={styles.ctaBtnWrapper}>
            <a className={styles.ctaBtn} href='https://discord.gg/JTnry5xubQ'>
              Join The Community
            </a>
          </div>
        </div> */}
      </div>
      <DevelopBy />
      <Conversation />
      <Announcements />
      <PlayLearnEarn />
    </>
  )
}

export default Home;
