import LoreSubTitle from './LoreSubTitle';
import LoreTextSentence from './LoreTextSentence';
import styles from './loreText.module.scss';

const LoreSubTitleSection = ({ className, title, texts }: any) => {
  return (
    <div className={`${className} ${styles.loreSubTitleSection}`}>
      <LoreSubTitle txt={title} />
      {texts.map((txt: any, idx: any) => (
        <LoreTextSentence txt={txt} key={idx} />
      ))}
    </div>
  )
}

export default LoreSubTitleSection;
