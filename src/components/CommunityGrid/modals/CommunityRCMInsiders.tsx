import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { rcmInsiderContents } from '../constants';
import styles from './CommunityRCMInsiders.module.scss';
import { Carousel } from './RCMInsiderCarousel/Carousel';

const CommunityRCMInsiders = () => {
  const { t } = useTranslation('communityPage');

  return (<div className={styles.rcmInsiderContainer}>
    <div className={styles.leftCol}>
      {rcmInsiderContents.map((content: any, idx: any) => (
        <div key={idx}>
          <div className={styles.subTitle}>{t(`rcmInsiders.${idx}.title`)}</div>
          {content.texts.map((txt: any) => (
            <p key={txt} className={styles.txt}>{parse(t(`rcmInsiders.${idx}.texts.${txt}`))}</p>
          ))}
        </div>
      ))}
    </div>
    <div className={styles.rightCol}>
      <Carousel />
    </div>
  </div>);
};

export default CommunityRCMInsiders;
