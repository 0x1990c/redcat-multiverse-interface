import Link from 'next/link';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useScreenWidth } from '../../hooks/useScreenCheck';
import styles from './Character.module.scss';

const Character = ({ character, characterId }: any) => {
  const { t } = useTranslation('charactersPage');
  const { thumbnail, fullCharacter, descriptions, fictions, fictionMobileIdx, knowledge, radar } = character;
  const { isMobile } = useScreenWidth();

  const FictionMobileUpper = () => {
    const idxArray = new Array(fictionMobileIdx + 1).fill(0);
    return (
      <>
        {idxArray.map((zero, idx) => (<p key={idx} className={styles.fiction}>{parse(t(`characters.${characterId}.fictions.${idx}`))}</p>))}
      </>
    )
  }

  const FictionMobileLower = () => {
    const idxArray = new Array(fictions.length - fictionMobileIdx - 1).fill(0);
    return (<>{idxArray.map((zero, idx) => (
      <p key={idx} className={styles.fiction}>{t(`characters.${characterId}.fictions.${idx + fictionMobileIdx + 1}`)}</p>)
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
          <p key={idx}>{parse(t(`characters.${characterId}.descriptions.${desc}`))}</p>
        ))}
      </div>
      <div className={`${styles.rightCol}`}>
        <div className={styles.knowledgeContainer}>
          <p>{t('knowledgeLabel')}</p>
          <ul>
            {knowledge.map((item: any, idx: any) => (
              <li key={idx}>{t(`characters.${characterId}.knowledge.${item}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className={`${styles.contentSection} ${styles.separator}`}></div>
    <div className={styles.contentSection}>
      <div className={styles.leftCol}>
        <p className={styles.fictionTitle}>{t('flashFiction')}</p>
        {!isMobile
          ? fictions.map((fiction: any, idx: any) => (
            <p key={idx} className={styles.fiction}>{parse(t(`characters.${characterId}.fictions.${fiction}`))}</p>
          ))
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
      <Link
        href={'/multiverse'}
      >
        <a className={styles.backBtn}>
          {t(`goBack`)}
        </a>
      </Link>
    </div>
  </div>)
};

export default Character;
