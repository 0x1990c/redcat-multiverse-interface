import styles from './CommunityManifesto.module.scss';

const CommunityManifesto = () => {
  return (<div className={styles.manifestoContainer}>
    <div className={styles.leftCol}>
      <p className={styles.subTitle}>A brand new journey starts…</p>
      <div className={`${styles.item} ${styles.backOrangeLight}`}>
        Here’s to the curious ones, those who love challenges, the inquisitive early adopters, with a never ending desire to empower the human race…
      </div>
      <div className={`${styles.item} ${styles.backBlue}`}>
        Here’s to the crazy ones, those who think and feel beyond the present moment, the outliers who see things differently…
      </div>
      <div className={`${styles.item} ${styles.backOrangeRed}`}>
        <p>Here’s to the game changers who, as Steve Jobs said, “stay hungry, stay foolish…”</p>
        <p>Meet Sanura, the Red Cat. Together, you will tear down antiquated walls and reimagine a better future!</p>
      </div>
      <div className={`${styles.item} ${styles.backDarkBlue}`}>
        Together, we can build more immersive experiences!
      </div>
      <div className={`${styles.item} ${styles.backYellow}`}>
        Let’s learn, grow and dream…together!
      </div>
    </div>
    <div className={styles.rightCol}>
      <img src='./images/community/manifesto_galss.jpeg' />
    </div>
  </div >);
};

export default CommunityManifesto;
