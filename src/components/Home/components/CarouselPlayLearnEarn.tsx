import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../HomeHero.module.scss'


const slideImages = [
  {
    id: 0,
    url: './images/HomeHero/carousel/WellsCarousel.png'
  },
  {
    id: 1,
    url: './images/HomeHero/carousel/PlikpliCarousel.png'
  },
  {
    id: 2,
    url: './images/HomeHero/carousel/FuYijunCarousel.jpg'
  },
  {
    id: 9999,
    url: './images/HomeHero/carousel/SanuraCarousel.png'
  },
  {
    id: 3,
    url: './images/HomeHero/carousel/CatoCarousel.jpg'
  },
  {
    id: 4,
    url: './images/HomeHero/carousel/MaliaCarousel.jpg'
  }
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
};

export const CarouselPlayLearnEarn = () => {
  const router = useRouter();

  const handleItemClick = (characterId: any) => {
    if (characterId === 9999) {
      router.push({ pathname: `/multiverse` });
      return;
    }
    router.push({ pathname: `/character`, query: { id: characterId } });
  }

  return (
    <>
      <Slide {...properties}>
        {
          slideImages.map((image, index) => (
            <div
              key={index}
              className={styles['container-height-carousel']}
              style={{
                backgroundImage: `url("${image.url}")`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                height: '350px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => handleItemClick(image.id)}
            >
            </div>
          ))
        }
      </Slide>
    </>
  )
}