import type { NextPage } from 'next'
import Container from '../src/components/container/Container'
import TeamGrid from '../src/components/Team/TeamGrid'
import GradientText from '../src/components/gradientText/GradientText'
import { useTheme } from 'next-themes'

const TeamPage: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <Container>
      <GradientText
        element='h1'
        text='THE TEAM'
        innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
        gradient={['#f9c930', '#f2957c', '#7192f3']}
      />
      <TeamGrid />
    </Container>
  )
}

export default TeamPage