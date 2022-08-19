import React from 'react'
import { useTranslation } from 'next-i18next';
import styles from './HomeHero.module.scss'
import { Announcement } from './components/Announcement'
import { announcement } from './helpers/announce'

export const Announcements = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles['container-margin']}>
      <div className={styles['container-announcements']}>
        <div className={styles['container-title']}>
          <h1>{t('announcement')}</h1>
        </div>
        {
          announcement.map((announce) => (
            <Announcement key={announce.id} announce={announce} />
          ))
        }
      </div>
    </div>
  )
}
