import styles from './FigmentCard.module.scss';

const LoreFigmentCard = ({ className, name, text, image }: any) => {
  return (
    <div className={`${className} ${styles.cardContainer}`}>
      <img src={image} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  )
}

export default LoreFigmentCard;