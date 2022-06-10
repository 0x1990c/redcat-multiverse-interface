import parse from 'html-react-parser';
import { useScreenWidth } from '../../hooks/useScreenCheck';
import styles from './PLESection.module.scss';

const PLESection = ({ content, colorSection }: any) => {
  const { title, comment, leftText, rightText } = content;
  const { isMobile } = useScreenWidth();

  const commentBoxImg = () => {
    console.log('title', title);
    if (isMobile) {
      return "/images/ple/ple_commentbox_mobile.png";
    }
    if (title.toLowerCase() === 'earn') {
      return "/images/ple/ple_commentbox_earn.png";
    }

    return "/images/ple/ple_commentbox.png";
  }

  return (<div className={styles.pleSection}>
    <div className={`${styles.sectionRow} ${styles.upperSection}`}>
      <p className={styles.sectionTitle}>{title}</p>
      <div className={styles.tagCommentContainer}>
        <img src="/images/ple/tag.png" className={`${styles.tagImg} ${styles[colorSection]}`} alt="Tag" />
        <div className={styles.tagComment}>
          <p className={`${styles.tagCommentText} ${styles[`${title}`]}`}>{comment}</p>
          <img src={commentBoxImg()} className={styles.tagCommentBox} alt="CommnetBox" />
        </div>
      </div>
    </div>
    <div className={styles.sectionRow}>
      <div className={styles.textCol}>
        {parse(leftText)}
      </div>
      <div className={styles.textCol}>
        {parse(rightText)}
      </div>
    </div>
  </div>)
}

export default PLESection;
