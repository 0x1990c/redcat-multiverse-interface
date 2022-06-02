import styles from '../HomeHero.module.scss'

export const ConversationBot1 = ({ tag }: any) => {

  return (
    <div>
      <div className={styles['container-conversation']}>
        <div className={styles['container-conversation-img']}>
          <img src={`${tag.img}`} alt="" />
        </div>
        <div className={styles['container-conversation-text']}>
          <div className={styles['paragraph']}>
            <p dangerouslySetInnerHTML={{ __html: tag.message }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}