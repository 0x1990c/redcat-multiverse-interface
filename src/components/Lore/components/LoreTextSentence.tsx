import parse from 'html-react-parser';
import styles from './loreText.module.scss';

const LoreTextSentence = ({ className, txt }: any) => {
  return (
    <p className={`${className} ${styles.textSentence}`}>
      {parse(txt)}
    </p>
  )
}

export default LoreTextSentence;
