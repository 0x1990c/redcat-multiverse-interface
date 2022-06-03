import parse from 'html-react-parser';
import styles from '../../../styles/ple.module.scss';

const PLEDescriptionBoxMobile = ({ texts }: any) => {
  return (
    <div className={styles.pleDescriptionWrapperMobile}>
      <div className={styles.pleDescriptionBoxMobile}>
        {texts.map((text: any, idx: any) => (
          <p key={idx}>{parse(text)}</p>
        ))}
      </div>
    </div>
  )
};

export default PLEDescriptionBoxMobile;
