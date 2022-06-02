import styles from '../../../styles/ple.module.scss';

const PLETabBarBtn = ({ text, active, onClick }: any) => {
  return (
    <button className={`${styles.pleTabBarMobileBtn} ${active === true ? styles.active : ''}`} onClick={onClick}>
      {text.toLowerCase()}
    </button>
  );
}

export default PLETabBarBtn;
