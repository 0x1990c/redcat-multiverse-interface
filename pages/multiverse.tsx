import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import TagComment from '../src/components/Lore/components/TagComment';
import LoreBigTitleSection from '../src/components/Lore/components/LoreBigTitleSection';
import LoreSubTitleSection from '../src/components/Lore/components/LoreSubTitleSection';
import FigmentCard from '../src/components/Lore/components/LoreFigmentCard';
import { characterDetails } from '../src/components/Character/constants';
import styles from '../src/styles/multiverse.module.scss'

const Lore: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('multiversePage');
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;

  const RED_CAT_MULTIVERSE_TEXTS = [t("red_cat_multiverse_texts.id_0"), t("red_cat_multiverse_texts.id_1")];
  const RED_CAT_CONTENTS = [
    {
      subTitle: t("red_cat_contents.id_0.subTitle"),
      texts: [t("red_cat_contents.id_0.texts.id_0"), t("red_cat_contents.id_0.texts.id_1")]
    },
    {
      subTitle: t("red_cat_contents.id_1.subTitle"),
      texts: [t("red_cat_contents.id_1.texts.id_0"), t("red_cat_contents.id_1.texts.id_1")]
    }
  ];

  const FIGMENTS_TEXTS = [t('figment_texts.id_0'), t('figment_texts.id_1')];

  const handleFigCardClick = (figIdx: number) => {
    router.push({ pathname: `/character`, query: { id: figIdx } });
  }

  return (
    <div>
      <Container className={`${styles.container} ${styles.hero_banner}`}>
        <GradientText
          element='h1'
          text={t('multiverse')}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </Container>
      {/* Page contents */}
      <div className={styles.contentContainer}>
        <div className={styles.pageContentContainer}>
          <TagComment className={styles.tagCommentContainer} />
          {/* THE RED CAT SECTION */}
          <LoreBigTitleSection
            className={styles.redCatTitle}
            title={t('the_redcat_multiverse')}
            texts={RED_CAT_MULTIVERSE_TEXTS}
          />
          {/* RED CAT SUB SECTIONS */}
          {RED_CAT_CONTENTS.map((content: any, idx) => (
            <LoreSubTitleSection className={styles.subTitleSection} title={content.subTitle} texts={content.texts} key={idx} />
          ))}

          {/* FIGMENTS */}
          <LoreBigTitleSection className={styles.figmentTitle} title={t('figment_title')} texts={FIGMENTS_TEXTS} />
        </div>
        {/* FIGMENTS cards */}
        <div className={styles.figmentCardContainer}>
          {characterDetails.map((cardContent, idx) => (
            <FigmentCard
              key={idx}
              className={styles.cardItem}
              name={cardContent.name}
              text={cardContent.role}
              image={cardContent.thumbnail}
              empty={cardContent.empty}
              onClick={() => handleFigCardClick(cardContent.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'multiversePage'])
  }
});

export default Lore;
