import { useTranslation } from 'next-i18next';
import styles from "./TagComment.module.scss";

const TagComment = ({ className }: any) => {
  const { t } = useTranslation('multiversePage');

  return (
    <div className={styles['container-chat']}>
      <div className={styles['container-conversation']}>
        <div className={styles['container-conversation-img']}>
          <img src={`/images/tag-2-left.png`} alt="" />
        </div>
        <div className={styles['container-conversation-text']}>
          <div className={styles['paragraph']}>
            <p dangerouslySetInnerHTML={{ __html: t('heroComment') }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagComment;
