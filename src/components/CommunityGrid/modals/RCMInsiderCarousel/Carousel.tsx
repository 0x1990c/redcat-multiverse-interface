import Link from "next/link";
import Router from "next/router";
import styles from './carousel.module.scss'

export const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <div id="slide-1" className={styles.sliderItem}>
          <img src="./images/community/insiders/slider_1.gif" alt="" />
          <div className={styles.sliderDesc}>
            <div>
              Made by:&nbsp;<span>Nick name</span>
            </div>
          </div>
        </div>
        <div id="slide-2" className={styles.sliderItem}>
          <img src="./images/community/insiders/slider_2.jpg" alt="" />
          <div className={styles.sliderDesc}>
            <div>
              Made by:&nbsp;<span>Nick name</span>
            </div>
          </div>
        </div>
        <div id="slide-3" className={styles.sliderItem}>
          <img src="./images/community/insiders/slider_3.jpg" alt="" />
          <div className={styles.sliderDesc}>
            <div>
              Made by:&nbsp;<span>Nick name</span>
            </div>
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
    </div>
  )
}