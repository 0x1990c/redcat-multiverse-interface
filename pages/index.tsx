import type { NextPage } from 'next'
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxHero from '../src/components/Home/ParallaxHero'
import { DevelopBy } from '../src/components/Home/DevelopBy';
import { Conversation } from '../src/components/Home/Conversation';
import { Announcements } from '../src/components/Home/Announcements';
import { PlayLearnEarn } from '../src/components/Home/PlayLearnEarn';

const Home: NextPage = () => {

    return (
        <>
            <ParallaxProvider>
                <ParallaxHero />
            </ParallaxProvider>

            <DevelopBy />
            <Conversation />
            <Announcements />
            <PlayLearnEarn />
        </>
    )
}

export default Home