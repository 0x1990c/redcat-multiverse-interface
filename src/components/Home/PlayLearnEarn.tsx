/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import styles from './HomeHero.module.scss'
import { Carousel } from './Carousel';

export const PlayLearnEarn = () => {
  return (
    <div className={styles['container-margin']}>
      <div className={styles['container-multiverse']}>
        <div className={styles['container-title']}>
          <h1> MULTIVERSE HIGHLIGHTS <br />PLAY-LEARN-EARN </h1>
        </div>
        <div className={styles['container-play-learn-carousel']}>
          <div>
            <div className={styles['container-title']}>
              <h2> PLAY </h2>
              <p>
                RedCat Multiverse characters are cute, cuddly, serious and even frightening, each with their own traits and abilities. Build your team and compete in the Imaginaerium arena against other players or explore story-based universes. <a href='/play-learn-earn?step=play'>Click here for more!</a>
              </p>
            </div>
            <div className={styles['container-title']}>
              <h2> LEARN </h2>
              <p>
                Master the Power Skills necessary to make you stronger in the 21st century! Empower the genius within you to create the future you desire. <a href='/play-learn-earn?step=learn'>Click here for more!</a>
              </p>
            </div>
          </div>
          <div className={styles['container-carousel']}>
            <Carousel />
          </div>
        </div>
        <div className={styles['container-play-learn-git pcarousel']}>
          <div className={styles['container-title']}>
            <h2> EARN </h2>
            <p>
              Every RedCat Multiverse NFT is an in-game asset. You can develop them and increase their real world value in cryptocurrency. There are also customizations and items which can only be earned, making them valuable assets in the marketplace. <a href='/play-learn-earn?step=earn'>Click here for more!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
