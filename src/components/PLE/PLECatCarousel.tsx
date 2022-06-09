import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './PLECatCarousel.module.scss';



// const PLECatCarousel = ({ cats }: any) => {
//   return (
//     <div className={styles.slider}>
//       <div className={styles['slide-track']}>
//         {cats.map((cat: any, idx: any) => (
//           <div key={idx} className={styles.slide}>
//             <img src={cat} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PLECatCarousel;


const PLECatCarousel = ({ cats }: any) => {
  const settings = {
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {cats.map((cat: any, idx: any) => (
          <div key={idx} className={styles.slide}>
            <img src={cat} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PLECatCarousel;
