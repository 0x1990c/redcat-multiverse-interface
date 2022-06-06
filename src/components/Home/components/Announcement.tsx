import React from 'react'
import styles from '../HomeHero.module.scss'
import { CarouselAnnounces } from './CarouselAnnounces'
import cx from 'classnames';

export const Announcement = ({ announce }: any) => {
  return (
    <>
      <div className={styles['container-annoucement-border']}>
        <div className={styles['container-annoucement']}>
          <div className={styles['container-img']}>
            <CarouselAnnounces />
          </div>
          <div className={cx(styles['container-description-annoucement'], styles['container-info-description'])}>
            <div>
              <h3>{announce.title}</h3>
              <p> {announce.message} </p>
              {/* <button> Read More </button> */}
            </div>
          </div>
        </div>
      </div>


    </>

  )
}
