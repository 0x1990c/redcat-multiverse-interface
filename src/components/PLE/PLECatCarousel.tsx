import styles from './PLECatCarousel.module.scss';

const PLECatCarousel = ({ cats }: any) => {
  return (
    <div className={styles.slider}>
      <div className={styles['slide-track']}>
        {cats.map((cat: any, idx: any) => (
          <div key={idx} className={styles.slide}>
            <img src={cat} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PLECatCarousel;
