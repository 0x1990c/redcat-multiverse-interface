import React from 'react'
import { Slide } from 'react-slideshow-image';
import styles from '../HomeHero.module.scss'

const slideImages = [
  { url: './images/HomeHero/carousel/matrix-cat.png' },
  { url: './images/HomeHero/carousel/colorpoint.jpeg' },
  { url: './images/HomeHero/carousel/pink.jpeg' },
  { url: './images/HomeHero/carousel/rainbow.jpeg' },
  { url: './images/HomeHero/carousel/Sanura-Gas-Mask.jpg' }
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: true,

};

export const CarouselAnnounces = () => {
  return (
    <>
      <Slide {...properties}>
        {

          slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <div className={styles['container-height-carousel-announce']} style={{
                backgroundImage: `url("${image.url}")`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                height: '350px',
                borderRadius: '8px'
              }}>
              </div>
            </div>
          ))
        }
      </Slide>
    </>
  )
}
