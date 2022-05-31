import styles from '../../styles/ple.module.scss';

const PLETabBar = ({ active, onClick }: any) => {
  return (
    <div
      className={`${styles.tabBar} ${active === true ? styles.active : ''}`}
      onClick={onClick}
    >
    </div>
  )
};

export default PLETabBar;
