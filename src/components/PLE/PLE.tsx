import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import GradientText from '../gradientText/GradientText';
import PLESection from './PLESection';
import PLECatCarousel from './PLECatCarousel';
import { sections, TOP_CATS, BOTTOM_CATS } from './constants';
import styles from '../../styles/ple.module.scss';

export default function PLE() {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | any>();
  const router = useRouter();
  const learnRef: any = useRef(null);
  const earnRef: any = useRef(null);

  const STEPS = ['play', 'learn', 'earn'];

  useEffect(() => {
    theme === "system" ? setCurrentTheme(systemTheme) : setCurrentTheme(theme);
  }, [setCurrentTheme, systemTheme, theme]);

  // useEffect(() => {
  //   if (learnRef && learnRef.current) {
  //     learnRef.current.scrollIntoView();
  //   }
  // });

  useEffect(() => {
    if (router.isReady) {
      const urlStep = router?.query?.step ? router.query.step : '';
      if (urlStep && STEPS.includes(urlStep.toString())) {
        // setActiveTabIdx(STEPS.indexOf(urlStep.toString()));
        switch (urlStep.toString()) {
          case 'play':
            window.scrollTo(0, 0);
            break;
          case 'learn':
            if (learnRef && learnRef.current) {
              learnRef.current.scrollIntoView();
            }
            break;
          case 'earn':
            if (earnRef && earnRef.current) {
              earnRef.current.scrollIntoView();
            }
            break;
          default:
            break;
        }
      } else {
        router.push({ pathname: `/play-learn-earn`, query: { step: 'play' } }, undefined, { shallow: true });
        window.scrollTo(0, 0);
      }
    }
  }, [STEPS, router, router.query]);

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleTabClick = (tabIdx: any) => {
    if (tabIdx !== activeTabIdx) {
      router.push({ pathname: `/play-learn-earn`, query: { step: STEPS[tabIdx] } }, undefined, { shallow: true });
    }
  }

  const handleMobileTabClick = (tabIdx: any) => {
    if (tabIdx !== activeTabIdx) {
      // setActiveTabIdx(tabIdx);
      router.push({ pathname: `/play-learn-earn`, query: { step: STEPS[tabIdx] } }, undefined, { shallow: true });
      window.scrollTo(0, 0);
    }
  }

  const handleBoxScrollToBottom = () => {
    setActiveTabIdx((activeTabIdx + 1) % 3);
  }

  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <GradientText
          element='h1'
          text={'PLAY >> LEARN >> EARN'}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </div>
      <div className={`${styles.sectionContainer} ${styles.playSectionContainer}`}>
        <PLESection content={sections[0]} />
      </div>
      <div>
        <PLECatCarousel cats={TOP_CATS} />
      </div>
      <div className={`${styles.sectionContainer} ${styles.learnSectionContainer}`} ref={learnRef}>
        <PLESection content={sections[1]} />
      </div>
      <div>
        <PLECatCarousel cats={BOTTOM_CATS} />
      </div>
      <div className={`${styles.sectionContainer} ${styles.earnSectionContainer}`} ref={earnRef}>
        <PLESection content={sections[2]} />
      </div>
    </div>
  )
}
