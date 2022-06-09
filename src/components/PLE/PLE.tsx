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

  const colorSections = ['redSection', 'blueSection', 'orangeSection'];
  const startIdx = ~~(new Date().getTime() / 1000) % 3;

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

  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <GradientText
          element='h1'
          text={`PLAY >> LEARN >> EARN`}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </div>
      <div className={`${styles.sectionContainer} ${styles[`${colorSections[startIdx]}`]}`}>
        <PLESection content={sections[0]} colorSection={colorSections[startIdx]} />
      </div>
      <div>
        <PLECatCarousel cats={TOP_CATS} />
      </div>
      <div className={`${styles.sectionContainer} ${styles[`${colorSections[(startIdx + 1) % 3]}`]}`} ref={learnRef}>
        <PLESection content={sections[1]} colorSection={colorSections[(startIdx + 1) % 3]} />
      </div>
      <div>
        <PLECatCarousel cats={BOTTOM_CATS} />
      </div>
      <div className={`${styles.sectionContainer} ${styles[`${colorSections[(startIdx + 2) % 3]}`]}`} ref={earnRef}>
        <PLESection content={sections[2]} colorSection={colorSections[(startIdx + 2) % 3]} />
      </div>
    </div>
  )
}
