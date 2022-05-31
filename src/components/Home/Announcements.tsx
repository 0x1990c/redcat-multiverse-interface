import React from 'react'
import styles from './HomeHero.module.scss'
import { Announcement } from './components/Announcement'
import { annoucements } from './helpers/announce'

export const Announcements = () => {
  return (
    <div className={styles['container-margin']}>
      <div className={styles['container-annoucements']}>
        <div className={styles['container-title']}>
          <h1> ANNOUCEMENTS </h1>
        </div>
        {
          annoucements.map((announce) => (
            <Announcement key={announce.id} announce={announce} />
          ))
        }
      </div>
    </div>
  )
}
