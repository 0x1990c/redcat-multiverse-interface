import React from 'react'
import styles from '../HomeHero.module.scss'

export const Announcement = ({ announce }: any) => {
  return (
    <>
      <div className={styles['container-annoucement-border']}>
        <div className={styles['container-annoucement']}>
          <div className={styles['container-img']} style={{
            backgroundImage: `url(${announce.img})`
          }}></div>
          <div className={styles['container-description-annoucement']}>
            <h3>{announce.title}</h3>
            <p> {announce.message} </p>
            <button> Read More </button>
          </div>
        </div>
      </div>
    </>

  )
}
