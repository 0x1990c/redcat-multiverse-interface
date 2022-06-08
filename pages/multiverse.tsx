import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes'

import GradientText from '../src/components/gradientText/GradientText'
import Container from '../src/components/container/Container'
import TagComment from '../src/components/Lore/components/TagComment';
import LoreBigTitleSection from '../src/components/Lore/components/LoreBigTitleSection';
import LoreSubTitleSection from '../src/components/Lore/components/LoreSubTitleSection';
import FigmentCard from '../src/components/Lore/components/LoreFigmentCard';
import {
  FIGMENTS_TITLE,
  FIGMENTS_TEXTS,
  RED_CAT_MULTIVERSE,
  RED_CAT_MULTIVERSE_TEXTS,
  RED_CAT_CONTENTS
} from '../src/components/Lore/constants';
import { characterDetails } from '../src/components/Character/constants';
import styles from '../src/styles/multiverse.module.scss'

const Lore: NextPage = () => {
  const router = useRouter();
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const handleFigCardClick = (figIdx: number) => {
    router.push({ pathname: `/character`, query: { id: figIdx } });
  }

  return (
    <div>
      <Container className={`${styles.container} ${styles.hero_banner}`}>
        <GradientText
          element='h1'
          text='MULTIVERSE'
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </Container>
      {/* Page contents */}
      <div className={styles.pageContentContainer}>
        <TagComment className={styles.tagCommentContainer} />
        {/* THE RED CAT SECTION */}
        <LoreBigTitleSection className={styles.redCatTitle} title={RED_CAT_MULTIVERSE} texts={RED_CAT_MULTIVERSE_TEXTS} />
        {/* RED CAT SUB SECTIONS */}
        {RED_CAT_CONTENTS.map((content: any, idx) => (
          <LoreSubTitleSection title={content.subTitle} texts={content.texts} key={idx} />
        ))}

        {/* FIGMENTS */}
        <LoreBigTitleSection className={styles.figmentTitle} title={FIGMENTS_TITLE} texts={FIGMENTS_TEXTS} />
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
            onClick={() => handleFigCardClick(cardContent.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Lore;