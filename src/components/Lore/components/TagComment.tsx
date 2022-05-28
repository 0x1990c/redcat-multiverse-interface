import LoreTagCommentBox from "./LoreTagCommentBox";
import { LORE_HERO_COMMENT } from "../constants";
import styles from "./TagComment.module.scss";

const TagComment = ({ className }: any) => {
  return (
    <div className={`${className} ${styles.commentContainer}`}>
      <img src='./images/tag.png' className={styles.commentTag} />
      <div className={styles.commentContentContainer}>
        <LoreTagCommentBox />
        <div className={styles.commentContentText}>{LORE_HERO_COMMENT}</div>
      </div>
    </div>
  );
};

export default TagComment;
