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
                The multiverse is filled with all kinds of beings, so characters come in a variety of forms and themes, from the cute and cuddly to the more serious or even frightening. They’re the main tool you’ll use to play the game, each with their own traits and abilities. Build your team and compete in the Imaginaerium arena against other players or explore story-based universes! <a href=''>Click here for more!</a>
              </p>
            </div>
            <div className={styles['container-title']}>
              <h2> LEARN </h2>
              <p>
                Automation is becoming a bigger and bigger part of the workplace, so the skills people need to prosper professionally are changing. People are becoming more valuable for their ability to assess and make good decisions, as well as their ability to effectively communicate, and the RedCat Multiverse will help you hone those skills. <a href=''>Click here for more!</a>
              </p>
            </div>
          </div>
          <div className={styles['container-carousel']}>
            <Carousel />
          </div>
        </div>
        <div className={styles['container-play-learn-carousel']}>
          <div className={styles['container-title']}>
            <h2> EARN </h2>
            <p>
              Your NFTs are your gateway into the multiverse! Every RedCat Multiverse NFT is an in-game asset, for you to use and develop.In addition to their in-game value, your NFTs have real world value in cryptocurrency! Characters also come in several rarities, which affect their overall value, making the few Legendary characters in the game special.There are also customizations and items which can only be earned, making them valuable flex, or valuable assets in the marketplace. <a href=''>Click here for more!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
