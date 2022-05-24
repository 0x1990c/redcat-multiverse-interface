import styles from './LoreFooter.module.scss';

const LoreFooter = ({ className }: any) => {
  return (
    <div className={`${className} ${styles.footerRocketCatContainer}`}>
      <img src="./images/redcat_rocket.png" className={styles.rocketCatImg} />
    </div>
  );
}

export default LoreFooter;
