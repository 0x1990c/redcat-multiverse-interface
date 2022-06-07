import Container from '../src/components/container/Container'
import GradientText from '../src/components/gradientText/GradientText'
import { Careers } from '../src/components/Careers/Careers';
import { useTheme } from 'next-themes'
import styles from '../src/styles/character.module.scss'

const character = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.bannerTitle}>
          <GradientText
            element='h2'
            text='WELLS, THE TIME TRAVELLER'
            innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
            gradient={['#f9c930', '#f2957c', '#7192f3']}
          />
        </div>
        <Careers />
      </Container>
    </div>
  )
}

export default character
