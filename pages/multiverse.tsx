import type { NextPage } from 'next'
import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
// import RoadmapTimeline from '../src/components/Roadmap/RoadmapTimeline'
import TagComment from '../src/components/Lore/components/TagComment';
import LoreBigTitleSection from '../src/components/Lore/components/LoreBigTitleSection';
import LoreSubTitleSection from '../src/components/Lore/components/LoreSubTitleSection';
import FigmentCard from '../src/components/Lore/components/LoreFigmentCard';
import { useTheme } from 'next-themes'
import { FIGMENTS_TITLE, FIGMENTS_TEXTS, RED_CAT_MULTIVERSE, RED_CAT_MULTIVERSE_TEXTS, RED_CAT_CONTENTS, FIGMENTS_CARDS } from '../src/components/Lore/constants';
import styles from '../src/styles/multiverse.module.scss'
import LoreFooter from '../src/components/Lore/components/LoreFooter';


const Lore: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <Container className={`${styles.container} ${styles.hero_banner}`}>
        <GradientText
          element='h1'
          text='LORE'
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
        <TagComment className={styles.tagCommentContainer} />
      </Container>
      {/* Page contents */}
      <div className={styles.pageContentContainer}>
        {/* THE RED CAT SECTION */}
        <LoreBigTitleSection className={styles.redCatTitle} title={RED_CAT_MULTIVERSE} texts={RED_CAT_MULTIVERSE_TEXTS} />
        {/* RED CAT SUB SECTIONS */}
        {RED_CAT_CONTENTS.map((content: any, idx) => (
          <LoreSubTitleSection title={content.subTitle} texts={content.texts} key={idx} />
        ))}

        {/* FIGMENTS */}
        <LoreBigTitleSection className={styles.figmentTitle} title={FIGMENTS_TITLE} texts={FIGMENTS_TEXTS} />
        {/* FIGMENTS cards */}
        <div className={styles.figmentCardContainer}>
          {FIGMENTS_CARDS.map((cardContent, idx) => (
            <FigmentCard key={idx} className={styles.cardItem} name={cardContent.name} text={cardContent.text} image={cardContent.image} />
          ))}
        </div>
      </div>
      {/* LORE footer - rocket cat */}
      <LoreFooter />
    </div>
  )
}

export default Lore;