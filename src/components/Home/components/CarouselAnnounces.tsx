import React from 'react'
import styles from '../carousel.module.scss'

const images = [
  { url: './images/HomeHero/carousel/black.jpeg' },
  { url: './images/HomeHero/carousel/colorpoint.jpeg' },
  { url: './images/HomeHero/carousel/pink.jpeg' },
  { url: './images/HomeHero/carousel/rainbow.jpeg' },
  { url: './images/HomeHero/carousel/Red.jpeg' },
]

export const CarouselAnnounces = () => {
  return (
    <>
      <div className={styles['carousel']} aria-label="Gallery">
        <ol className={styles['carousel__viewport']}>
          {
            images.map((image, index) => (
              <li key={index} className={styles['carousel__slide']}
                style={{
                  backgroundImage: `url("${image.url}")`,
                  backgroundSize: '100%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className={styles['carousel__snapper']}></div>
              </li>
            ))
          }
        </ol>
      </div>

    </>
  )
}
