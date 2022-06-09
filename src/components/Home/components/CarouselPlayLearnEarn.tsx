import styles from '../HomeHero.module.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: './images/HomeHero/carousel/WellsCarousel.png'
  },
  {
    url: './images/HomeHero/carousel/FuYijunCarousel.jpg'
  },
  {
    url: './images/HomeHero/carousel/SanuraCarousel.png'
  },
  {
    url: './images/HomeHero/carousel/PlikpliCarousel.png'
  }
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex: any, newIndex: any) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export const CarouselPlayLearnEarn = () => {
  return (
    <>
      <Slide {...properties}>
        {

          slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <div className={styles['container-height-carousel']} style={{
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