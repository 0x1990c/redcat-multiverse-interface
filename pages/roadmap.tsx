import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import RoadmapTimeline from '../src/components/Roadmap/RoadmapTimeline'
import { useTheme } from 'next-themes'
import styles from '../src/styles/community.module.scss'

const Roadmap: NextPage = () => {
  const { t } = useTranslation('roadmapPage');

  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={styles.container}>
        <GradientText
          element='h1'
          text={t('roadmap')}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
        <RoadmapTimeline />
      </Container>
    </div>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'roadmapPage'])
  }
});

export default Roadmap;
