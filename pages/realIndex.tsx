import type { NextPage } from 'next'
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxHero from '../src/components/Parallax/ParallaxHero'
import { DevelopBy } from '../src/components/Parallax/DevelopBy';

const Home: NextPage = () => {

  return (
    <div>
      <ParallaxProvider>
        <ParallaxHero />
      </ParallaxProvider>

      <DevelopBy />

    </div>
  )
}

export default Home