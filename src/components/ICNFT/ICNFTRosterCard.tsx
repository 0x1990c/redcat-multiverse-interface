import styles from './ICNFTRosterCard.module.scss';

const ICNFTRosterCard = ({ title, content, category }: any) => {
  return (
    <div className={`${styles.icNFTRosterCard} ${styles[category]}`}>
      <div className={`${styles.cardTitle} ${styles[category]}`}>{title}</div>
      <div className={styles.content}>
        {content.map((item: any, idx: any) => {
          return <div key={idx} className={styles.rosterContent}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default ICNFTRosterCard;
