import React from 'react'
import styles from '../carousel.module.scss'

export const CarouselAnnounces = () => {
  return (
    <>
      <div className={styles['carousel-wrapper']}>
        <div className={styles['carousel-container']}>
          <div className={styles['carousel']}>
            <div className={styles['image-one']}></div>
            <div className={styles['image-two']}></div>
            <div className={styles['image-three']}></div>
            <div className={styles['image-four']}></div>
            <div className={styles['image-five']}></div>
          </div>
        </div>
      </div>
    </>
  )
}
