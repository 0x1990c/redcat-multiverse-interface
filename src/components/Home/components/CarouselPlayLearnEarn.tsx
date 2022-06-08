import React from 'react'
import styles from '../carouselPlayLearnEarn.module.scss'
import Link from "next/link";

export const CarouselPlayLearnEarn = () => {
  return (
    <div className={styles.slider}>
      <div className={styles['carousel-wrapper']}>
        <div className={styles['carousel-container']}>
          <div className={styles['carousel']}>
            <div id="slide-1" className={styles['image-one']}></div>
            <div id="slide-2" className={styles['image-two']}></div>
            <div id="slide-3" className={styles['image-three']}></div>
            <div id="slide-4" className={styles['image-four']}></div>
          </div>
        </div>
      </div>
      <Link href="#slide-1" scroll={false}>
        <span>1</span>
      </Link>
      <Link href="#slide-2" scroll={false}>
        <span>2</span>
      </Link>
      <Link href="#slide-3" scroll={false}>
        <span>3</span>
      </Link>
      <Link href="#slide-4" scroll={false}>
        <span>4</span>
      </Link>
    </div>
  )
}
