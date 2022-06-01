import { rcmInsiderContents } from '../constants';
import styles from './CommunityRCMInsiders.module.scss';

const CommunityRCMInsiders = () => {
  return (<div className={styles.rcmInsiderContainer}>
    <div className={styles.leftCol}>
      {rcmInsiderContents.map((content: any, idx: any) => (<div key={idx}>
        <div className={styles.subTitle}>{content.title}</div>
        {content.texts.map((txt: any, idxx: any) => (<p key={idxx} className={styles.txt}>{txt}</p>))}
      </div>))}
    </div>
    <div className={styles.rightCol}>
      <img src='./images/community/rcm_insider.gif' />
    </div>
  </div>);
};

export default CommunityRCMInsiders;
