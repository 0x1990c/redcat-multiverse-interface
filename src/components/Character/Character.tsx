import { useScreenWidth } from '../../hooks/useScreenCheck';
import styles from './Character.module.scss';

const Character = ({ character }: any) => {
  const { thumbnail, fullCharacter, descriptions, fictions, fictionMobileIdx, knowledge, radar } = character;
  const { isMobile } = useScreenWidth();

  const FictionMobileUpper = () => {
    const idxArray = new Array(fictionMobileIdx + 1).fill(0);
    return (
      <>
        {idxArray.map((zero, idx) => (<p key={idx} className={styles.fiction}>{fictions[idx]}</p>))}
      </>
    )
  }

  const FictionMobileLower = () => {
    const idxArray = new Array(fictions.length - fictionMobileIdx - 1).fill(0);
    return (<>{idxArray.map((zero, idx) => (
      <p key={idx} className={styles.fiction}>{fictions[idx + fictionMobileIdx + 1]}</p>)
    )}</>)
  }

  return (<div className={styles.characterContentContainer}>
    <div className={styles.contentSection}>
      <div className={styles.leftCol}>
        <img src={thumbnail} className={styles.thumbnail} />
      </div>
      <div className={`${styles.rightCol}`}>
        <img src={radar} className={styles.radar} />
      </div>
    </div>
    <div className={styles.contentSection}>
      <div className={`${styles.leftCol} ${styles.descriptions}`}>
        {descriptions.map((desc: any, idx: any) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
      <div className={`${styles.rightCol}`}>
        <div className={styles.knowledgeContainer}>
          <p>Did you know?</p>
          <ul>
            {knowledge.map((item: any, idx: any) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className={`${styles.contentSection} ${styles.separator}`}></div>
    <div className={styles.contentSection}>
      <div className={styles.leftCol}>
        <p className={styles.fictionTitle}>Flash Fiction</p>
        {!isMobile
          ? fictions.map((fiction: any, idx: any) => (<p key={idx} className={styles.fiction}>{fiction}</p>))
          : <FictionMobileUpper />
        }
      </div>
      <div className={`${styles.rightCol}`}>
        <img src={fullCharacter} className={styles.fullCharacter} />
      </div>
      {isMobile && (
        <div className={`${styles.rightCol}`}>
          <FictionMobileLower />
        </div>
      )}
    </div>
    <div className={`${styles.contentSection} ${styles.separator}`}></div>
    <div className={`${styles.contentSection} ${styles.backBtnSection}`}>
      <a
        className={styles.backBtn}
        href={'/multiverse'}
        rel="noreferrer"
      >
        Back to the Multiverse
      </a>
    </div>
  </div>)
};

export default Character;
