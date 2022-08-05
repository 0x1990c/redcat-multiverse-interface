// import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { rcmLabsTexts } from '../constants';
// import { IMAGE_BLUR_DATA_URL_PINK } from '../../../utilities/constants';
import styles from './CommunityRCMLabs.module.scss';

const CommunityRCMLabs = () => {
  const { t } = useTranslation('communityPage');

  return (<div className={styles.rcmLabsContainer}>
    <div className={styles.rcmLabsContent}>
      <div className={styles.leftCol}>
        <p className={styles.rcmLabsDesc}>
          {t('rcmLabs.description')}
        </p>
        {rcmLabsTexts.map((txt: any, idx: any) => (<p key={idx} className={styles.storyTxt}>
          {t(`rcmLabs.texts.${txt}`)}
        </p>))}
      </div>
      <div className={styles.rightCol}>
        <img src='/images/sanura-red@2x.png' alt='Sanura' />
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
