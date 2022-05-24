import styles from './loreText.module.scss';

const LoreSubTitle = ({ className, txt }: any) => {
  return (
    <p className={`${className} ${styles.subTitle}`}>{txt}</p>
  )
}

export default LoreSubTitle;
