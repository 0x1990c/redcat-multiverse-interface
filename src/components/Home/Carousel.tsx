import Link from "next/link";
import Router from "next/router";
import styles from './carousel.module.scss'

export const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <div id="slide-1">
          <img src="./images/HomeHero/tags/tag-2-left.png" alt="" />
        </div>
        <div id="slide-2">
          <img src="./images/HomeHero/tags/tag-2-right.png" alt="" />
        </div>
        <div id="slide-3">
          <img src="./images/HomeHero/tags/tag-2-left.png" alt="" />
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
