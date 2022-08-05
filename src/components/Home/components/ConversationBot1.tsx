import { useTranslation } from 'next-i18next';
import styles from '../HomeHero.module.scss'

export const ConversationBot1 = ({ tag }: any) => {
  const { t } = useTranslation('home');

  return (
    <div>
      <div className={styles['container-conversation']}>
        <div className={styles['container-conversation-img']}>
          <img src={`${tag.img}`} alt="" />
        </div>
        <div className={styles['container-conversation-text']}>
          <div className={styles['paragraph']}>
            <p dangerouslySetInnerHTML={{ __html: t('tagMessage') }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}