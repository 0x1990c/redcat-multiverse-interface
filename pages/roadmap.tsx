import type { NextPage } from 'next'
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import RoadmapTimeline from '../src/components/Roadmap/RoadmapTimeline'
import { useTheme } from 'next-themes'
import styles from '../src/styles/community.module.scss'

const Roadmap: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={styles.container}>
        <GradientText
          element='h1'
          text='ROADMAP'
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
        <RoadmapTimeline />
      </Container>
    </div>
  )
}

export default Roadmap;
