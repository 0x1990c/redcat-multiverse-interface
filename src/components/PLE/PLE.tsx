import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useScreenWidth } from '../../hooks/useScreenCheck';
import GradientText from '../gradientText/GradientText';
import { items } from './constants';
import styles from '../../styles/ple.module.scss';
import PLETabBar from './PLETabBar';
import PLEDescriptionBox from './PLEDescriptionBox';
import PLETagComment from './PLETagComment';

import PLETagCommentMobile from './mobile/PLETagCommentMobile';
import PLEDescriptionBoxMobile from './mobile/PLEDescriptionBoxMobile';
import PLETabBarBtn from './mobile/PLETabBarBtn';

const PLE = () => {
  const { isMobile } = useScreenWidth();
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | any>('light');

  // const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    theme === "system" ? setCurrentTheme(systemTheme) : setCurrentTheme(theme);
  }, [setCurrentTheme, systemTheme, theme]);

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleTabClick = (tabIdx: any) => {
    if (tabIdx !== activeTabIdx) {
      setActiveTabIdx(tabIdx);
    }
  }

  const handleMobileTabClick = (tabIdx: any) => {
    if (tabIdx !== activeTabIdx) {
      setActiveTabIdx(tabIdx);

      window.scrollTo(0, 0);
    }
  }

  const handleBoxScrollToBottom = () => {
    setActiveTabIdx((activeTabIdx + 1) % 3);
  }

  return (<div>
    {/* Desktop version  */}
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
        <PLEDescriptionBox texts={items[activeTabIdx].texts} onScrollAtBottom={handleBoxScrollToBottom} />
        {/* Tag comment */}
        <PLETagComment text={items[activeTabIdx].comment} />
      </div>
    </div>
    {/* Mobile version */}
    <div className={styles.mobileContainer}>
      <PLETagCommentMobile text={items[activeTabIdx].comment} />
      <div className={styles.title}>
        <GradientText
          element='h1'
          text={items[activeTabIdx].title}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </div>
      <PLEDescriptionBoxMobile texts={items[activeTabIdx].texts} />
      <div className={styles.pleTabBarMobile}>
        {items.map((tab, idx) => (
          <PLETabBarBtn key={idx} text={tab.title} active={idx === activeTabIdx} onClick={() => handleMobileTabClick(idx)} />
        ))}
      </div>
    </div>
  </div>

  )
}

export default PLE;
