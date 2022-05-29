import styles from '../../styles/ple.module.scss';

const PLEDescriptionBox = ({ texts }: any) => {
  return (
    <div className={styles.pleDescriptionWrapper}>
      <div className={styles.pleDescriptionBox}>
        {texts.map((text: any, idx: any) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </div>
  )
};

export default PLEDescriptionBox;
