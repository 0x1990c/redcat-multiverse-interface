import React from 'react'
import { useTranslation } from 'next-i18next';
import styles from '../HomeHero.module.scss'
import { CarouselAnnounces } from './CarouselAnnounces'
import cx from 'classnames';

export const Announcement = ({ announce }: any) => {
  const { t } = useTranslation('home');

  return (
    <>
      <div className={styles['container-annoucement-border']}>
        <div className={styles['container-annoucement']}>
          <div className={styles['container-carousel-announce']}>
            <CarouselAnnounces />
          </div>
          <div className={cx(styles['container-description-annoucement'], styles['container-info-description'])}>
            <div>
              <h3>{t('announce.title')}</h3>
              <p>{t('announce.message')}</p>
              {/* <button> Read More </button> */}
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
