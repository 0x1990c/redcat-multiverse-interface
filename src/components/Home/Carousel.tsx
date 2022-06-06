import Link from "next/link";
import Router from "next/router";
import styles from './carousel.module.scss'

export const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <div id="slide-1">
          <img src="./images/HomeHero/carousel/WellsCarousel.png" alt="" />
        </div>
        <div id="slide-2">
          <img src="./images/HomeHero/carousel/SanuraCarousel.png" alt="" />
        </div>
        <div id="slide-3">
          <img src="./images/HomeHero/carousel/PlikpliCarousel.png" alt="" />
        </div>
        <div id="slide-4">
          <img src="./images/HomeHero/carousel/FuYijunCarousel.jpg" alt="" />
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
