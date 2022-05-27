import { rcmInsiderContents } from '../constants';
import styles from './CommunityRCMInsiders.module.scss';

const CommunityRCMInsiders = () => {
  return (<div className={styles.rcmInsiderContainer}>
    <div className={styles.leftCol}>
      {rcmInsiderContents.map((content: any, idx: any) => (<div key={idx}>
        <div>{content.title}</div>
        {content.texts.map((txt: any, idxx: any) => (<p key={idxx}>{txt}</p>))}
      </div>))}
    </div>
    <div className={styles.rightCol}>
      <img src='./images/community/community_04.png' />
    </div>
  </div>);
};

export default CommunityRCMInsiders;
