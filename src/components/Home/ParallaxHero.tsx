import { useParallax } from 'react-scroll-parallax';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import styles from './HomeHero.module.scss'

const ParallaxHero = () => {

  const cityRef = useParallax<HTMLDivElement>({
    translateY: [-80, 70]
  });

  const cloudsRef = useParallax<HTMLDivElement>({
    translateY: [10, -20]
  });


  return (
    <MouseParallaxContainer
      className="parallax"
      containerStyles={{
        width: "100%",
        height: "100vh",
        display: "grid",
      }}
      resetOnLeave
    >
      <MouseParallaxChild
        factorX={0.03}
        factorY={0.08}
        updateStyles={{
          transform: "scale(1.05)",
        }}
      >
        <div ref={cityRef.ref} className={styles['bg-city']} style={{
          backgroundImage: "url(/images/HomeHero/City.png)",
          backgroundPositionY: '25px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: "scale(1), translateY(-2%)",
          height: "100%",
        }}>
        </div>
      </MouseParallaxChild>

      <MouseParallaxChild
        factorX={0.1}
        factorY={0.1}
        updateStyles={{
          transform: "scale(1.1)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div ref={cloudsRef.ref} className='text' style={{
          backgroundImage: "url(/images/HomeHero/Clouds.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: "scale(1.1)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}>
        </div>
      </MouseParallaxChild>

      <MouseParallaxChild
        factorX={0.03}
        factorY={0.03}
        updateStyles={{
          transform: "scale(1.1)",
          position: "absolute",
          width: "99%",
          height: "100%",
        }}
      >
        <div className={styles.ledge} style={{
          backgroundImage: "url(/images/HomeHero/Ledge.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: "absolute",
          width: "99%",
          height: "100%",
        }}>
        </div>
      </MouseParallaxChild>

      <MouseParallaxChild
        factorX={0.05}
        factorY={0.05}
        updateStyles={{
          transform: "scale(1.1)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div className='text' style={{
          backgroundImage: "url(/images/HomeHero/glowylights.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: "absolute",
          width: "100%",
          height: "100%",
        }}>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>

  );
}

export default ParallaxHero;