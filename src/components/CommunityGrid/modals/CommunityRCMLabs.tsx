import Image from 'next/image';
import { rcmLabsTexts } from '../constants';
import { IMAGE_BLUR_DATA_URL_PINK } from '../../../utilities/constants';
import styles from './CommunityRCMLabs.module.scss';

const CommunityRCMLabs = () => {
  return (<div className={styles.rcmLabsContainer}>
    <div className={styles.rcmLabsContent}>
      <div className={styles.leftCol}>
        <p className={styles.rcmLabsDesc}>
          It all started with one question: What if we could harness the engagement potential of blockchain gaming, but also encourage people to master skills that go beyond playing games and make them more employable?
        </p>
        {rcmLabsTexts.map((txt: any, idx: any) => (<p key={idx} className={styles.storyTxt}>
          {txt}
        </p>))}
      </div>
      <div className={styles.rightCol}>
        <img src='./images/sanura-red@2x.png' alt='Sanura' />
        {/* <div>
          <Image
            src='/images/sanura-red@2x.png'
            alt='Sanura'
            layout='fill'
            placeholder='blur'
            blurDataURL={IMAGE_BLUR_DATA_URL_PINK}
          />
        </div> */}
      </div>
    </div>
  </div>);
};

export default CommunityRCMLabs;
