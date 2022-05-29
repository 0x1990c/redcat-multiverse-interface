import type { NextPage } from 'next'
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import CommunityGrid from '../src/components/CommunityGrid/CommunityGrid'
import { useTheme } from 'next-themes'
import styles from '../src/styles/icnft.module.scss'

const ICNFT: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={`${styles.container}`}>
        <GradientText
          element='h1'
          text='NFT COLLECTION Coming soon'
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </Container>
    </div>
  )
}

export default ICNFT;
