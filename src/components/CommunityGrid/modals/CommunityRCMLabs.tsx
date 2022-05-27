import { rcmLabsTexts } from '../constants';
import styles from './CommunityRCMLabs.module.scss';

const CommunityRCMLabs = () => {
  return (<div className={styles.rcmLabsContainer}>
    <p className={styles.rcmLabsDesc}>
      It all started with one question: What if we could harness the engagement potential of blockchain gaming, but also encourage people to learn skills that go beyond playing games and make them more employable?
    </p>
    <div className={styles.rcmLabsContent}>
      <div className={styles.leftCol}>
        {rcmLabsTexts.map((txt: any, idx: any) => (<p key={idx}>
          {txt}
        </p>))}
      </div>
      <div className={styles.rightCol}>
        <img src='./images/sanura-red@2x.png' />
      </div>
    </div>

  </div>);
};

export default CommunityRCMLabs;
