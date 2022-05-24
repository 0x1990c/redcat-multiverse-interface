import styles from './loreText.module.scss';

const LoreBigTitle = ({ className, txt }: any) => {
  return (
    <p className={`${className} ${styles.bigTitle}`}>{txt}</p>
  )
}

export default LoreBigTitle;
