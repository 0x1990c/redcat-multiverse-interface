import styles from './loreText.module.scss';

const LoreTextSentence = ({ className, txt }: any) => {
  return (
    <p className={`${className} ${styles.textSentence}`}>{txt}</p>
  )
}

export default LoreTextSentence;
