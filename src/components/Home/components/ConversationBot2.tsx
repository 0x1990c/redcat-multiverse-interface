import { useTranslation } from 'next-i18next';
import styles from '../HomeHero.module.scss'

export const ConversationBot2 = ({ tag }: any) => {
  const { t } = useTranslation('home');

  return (
    <div className={styles['container-margin-2']} >
      <div className={styles['container-conversation-2']}>
        <div className={styles['container-conversation-text-2']}>
          <p dangerouslySetInnerHTML={{ __html: t('tagMessage') }}></p>
        </div>
        <div className={styles['container-conversation-img-2']}>
          <img src={`${tag.img}`} alt="" />
        </div>
      </div>
    </div>
  )
}
