import styles from '../HomeHero.module.scss'

export const ConversationBot2 = ({ tag }: any) => {
  return (
    <div className={styles['container-margin-2']} >
      <div className={styles['container-conversation-2']}>
        <div className={styles['container-conversation-text-2']}>
          <p> {tag.message} </p>
        </div>
        <div className={styles['container-conversation-img-2']}>
          <img src={`${tag.img}`} alt="" />
        </div>
      </div>
    </div>
  )
}
