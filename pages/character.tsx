/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Container from '../src/components/container/Container'
import GradientText from '../src/components/gradientText/GradientText'
import styles from '../src/styles/character.module.scss'
import Character from '../src/components/Character/Character';
import { characterDetails } from '../src/components/Character/constants';

const character = () => {
  const [figId, setFigId] = useState<number | null>();
  const { theme, systemTheme } = useTheme()
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router?.query?.id ? router.query.id : 0;
      if (id) {
        setFigId(parseInt(id.toString()));
      } else {
        setFigId(0)
      }
    }
  }, [router, router.query]);

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      {
        figId !== null && figId !== undefined && (
          <Container className={styles.container}>
            <div className={styles.bannerTitle}>
              <GradientText
                element='h2'
                text='WELLS,'
                innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
                gradient={['#f9c930', '#f2957c', '#7192f3']}
              />
            </div>
            <div className={styles.bannerTitle}>
              <GradientText
                element='h2'
                text='THE TIME TRAVELER'
                innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
                gradient={['#f9c930', '#f2957c', '#7192f3']}
              />
            </div>
            <Character character={characterDetails[figId]} />
          </Container>
        )
      }
    </div>
  )
}

export default character
