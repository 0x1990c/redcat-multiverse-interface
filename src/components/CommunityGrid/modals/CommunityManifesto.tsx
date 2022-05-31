import styles from './CommunityManifesto.module.scss';

const CommunityManifesto = () => {
  return (<div className={styles.manifestoContainer}>
    <div className={styles.leftCol}>
      <p>
        A brand new journey starts…</p>
      <p>Here’s to the curious ones, those who love challenges, the inquisitive early adopters, with a never ending desire to empower the human race…</p>
      <p>Here’s to the crazy ones, those who think and feel beyond the present moment, the outliers who see things differently…</p>
      <p>Here’s to the game changers who, as Steve Jobs said, “stay hungry, stay foolish…”</p>
      <p>Meet Sanura, the RedCat. Together, you will tear down antiquated walls, and reimagine a better future!</p>
      <p>Together, we can build more immersive experiences!</p>
      <p>Let’s learn, grow, and dream…together!</p>
    </div>
    <div className={styles.rightCol}>
      <img src='./images/community/manifesto@2x.png' />
    </div>
  </div >);
};

export default CommunityManifesto;
