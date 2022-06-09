import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const CarouselPlayLearnEarn = () => {
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
        organicArrows={false}
      >
        <div data-src="./images/HomeHero/carousel/WellsCarousel.png" />
        <div data-src="./images/HomeHero/carousel/FuYijunCarousel.jpg" />
        <div data-src="./images/HomeHero/carousel/SanuraCarousel.png" />
        <div data-src="./images/HomeHero/carousel/PlikpliCarousel.png" />
      </AutoplaySlider>
    </>
  )
}