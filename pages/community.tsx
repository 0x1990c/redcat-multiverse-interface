import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import CommunityGrid from '../src/components/CommunityGrid/CommunityGrid'
import styles from '../src/styles/community.module.scss'

const Community: NextPage = () => {
  const { t } = useTranslation('communityPage');
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={styles.container}>
        <GradientText
          element='h1'
          text={t('community')}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
        <CommunityGrid />
      </Container>
    </div>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'communityPage'])
  }
});

export default Community;
