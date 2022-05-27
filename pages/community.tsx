import type { NextPage } from 'next'
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import CommunityGrid from '../src/components/CommunityGrid/CommunityGrid'
import { useTheme } from 'next-themes'
import styles from '../src/styles/community.module.scss'

const Community: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={styles.container}>
        <GradientText
          element='h1'
          text='COMMUNITY'
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
        <CommunityGrid />
        <div className={styles.contactSection}>
          <p>connect to the multiverse</p>
          <img src='./images/community/community_08.png' />
        </div>
      </Container>
    </div>
  )
}

export default Community