/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from './HomeHero.module.scss'
import { CarouselPlayLearnEarn } from './components/CarouselPlayLearnEarn';

export const PlayLearnEarn = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles['container-margin']}>
      <div className={styles['container-multiverse']}>

        <div className={styles['container-title']}>
          <h1>{t('multiverseHighlight')}<br /><span className='text-uppercase'>{t('play_learn_earn')}</span></h1>
        </div>

        <div className={styles['container-play-learn-carousel']}>
          <div>
            <div className={styles['container-title']}>
              <h2 className='text-uppercase'>{t('play')}</h2>
              <p>{t('playText')}&nbsp;
                <Link href='/play-learn-earn?step=play'>
                  <a>{t('clickHere')}</a>
                </Link>
              </p>
            </div>
            <div className={styles['container-title']}>
              <h2 className='text-uppercase'>{t('learn')}</h2>
              <p>{t('learnText')}&nbsp;
                <Link href='/play-learn-earn?step=learn'>
                  <a>{t('clickHere')}</a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles['container-carousel']}>
            <CarouselPlayLearnEarn />
          </div>
        </div>
        <div className={styles['container-play-learn-git pcarousel']}>
          <div className={styles['container-title']}>
            <h2 className='text-uppercase'>{t('earn')}</h2>
            <p>{t('earnText')}&nbsp;
              <Link href='/play-learn-earn?step=earn'>
                <a>{t('clickHere')}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
