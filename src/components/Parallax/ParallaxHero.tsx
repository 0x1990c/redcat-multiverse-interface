import { useParallax } from 'react-scroll-parallax';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const ParallaxHero = () => {


  const cloudsRef = useParallax<HTMLDivElement>({
    translateY: [100, -100]
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
        factorY={0.03}
        updateStyles={{
          transform: "scale(1.05)",
          width: "100%",
          height: "100%",
        }}
      >
        <div className='text' style={{
          backgroundImage: "url(/images/HomeHero/City.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: "scale(1)",
          position: "absolute",
          width: "100%",
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
        factorX={0}
        factorY={0}
        updateStyles={{
          transform: "scale(1.1)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div className='text' style={{
          backgroundImage: "url(/images/HomeHero/Ledge.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: "absolute",
          width: "96%",
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