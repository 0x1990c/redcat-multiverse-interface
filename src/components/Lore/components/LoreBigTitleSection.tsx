import LoreBigTitle from './LoreBigTitle';
import LoreTextSentence from './LoreTextSentence';
import styles from './loreText.module.scss';

const LoreBigTitleSection = ({ className, title, texts }: any) => {
  return (
    <div className={className}>
      <LoreBigTitle txt={title} />
      {texts.map((txt: any, idx: any) => (
        <LoreTextSentence txt={txt} key={idx} />
      ))}
    </div>
  )
}

export default LoreBigTitleSection;
