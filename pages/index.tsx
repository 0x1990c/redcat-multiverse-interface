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
      </div>
      <DevelopBy />
      <Conversation />
      <Announcements />
      <PlayLearnEarn />
    </>
  )
}

export default Home;
