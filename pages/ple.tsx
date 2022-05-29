import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import GradientText from '../src/components/gradientText/GradientText';
import Container from '../src/components/container/Container';
import CommunityGrid from '../src/components/CommunityGrid/CommunityGrid';
import { items } from '../src/components/PLE/constants';
import styles from '../src/styles/ple.module.scss';
import PLETab from '../src/components/PLE/PLETab';
import PLETabBar from '../src/components/PLE/PLETabBar';
import { useState } from 'react';
import PLEDescriptionBox from '../src/components/PLE/PLEDescriptionBox';
import PLETagComment from '../src/components/PLE/PLETagComment';

const ICNFT: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleTabClick = (tabIdx: any) => {
    if (tabIdx !== activeTabIdx) {
      setActiveTabIdx(tabIdx);
    }
  }

  return (
    <div className={`${styles.container}`}>
      <img src='./images/ple/ple_background.png' className={styles.background} />
      <div className={styles.title}>
        <GradientText
          element='h1'
          text={items[activeTabIdx].title}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </div>
      <div className={styles.pleContentsContainer}>
        {/* TAB */}
        <div className={styles.pleTabContainer}>
          {items.map((tab, idx) => (
            <PLETabBar key={idx} active={idx === activeTabIdx} onClick={() => handleTabClick(idx)} />
          ))}
        </div>
        {/* Description Box */}
        <PLEDescriptionBox texts={items[activeTabIdx].texts} />
        {/* Tag comment */}
        <PLETagComment text={items[activeTabIdx].comment} />
      </div>
    </div>
  )
}

export default ICNFT;
