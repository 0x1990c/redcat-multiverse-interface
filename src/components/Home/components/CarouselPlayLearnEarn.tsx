import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../HomeHero.module.scss'


const slideImages = [
  {
    id: 0,
    url: './images/characters/wells_full_character.png'
  },
  {
    id: 1,
    url: './images/characters/plikplik_full_character.png'
  },
  {
    id: 2,
    url: './images/characters/fuyijun_full_character.png'
  },
  {
    id: 3,
    url: './images/characters/cato_full_character.png'
  },
  {
    id: 4,
    url: './images/characters/malia_full_character.png'
  },
  {
    id: 5,
    url: './images/characters/maroc_full_character.png'
  },
  {
    id: 6,
    url: './images/characters/axis-12_full_character.png'
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
                // backgroundSize: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '420px',
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