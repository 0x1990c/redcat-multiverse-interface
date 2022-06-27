import { LORE_HERO_COMMENT } from "../constants";
import styles from "./TagComment.module.scss";

const TagComment = ({ className }: any) => {

  return (
    <div className={styles['container-chat']}>
      <div className={styles['container-conversation']}>
        <div className={styles['container-conversation-img']}>
          <img src={`./images/tag-2-left.png`} alt="" />
        </div>
        <div className={styles['container-conversation-text']}>
          <div className={styles['paragraph']}>
            <p dangerouslySetInnerHTML={{ __html: LORE_HERO_COMMENT }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagComment;
