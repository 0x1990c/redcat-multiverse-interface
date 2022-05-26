import styles from './RadioSwitch.module.scss';

const RadioSwitch = ({ className, onClick }: any) => {
  return (
    <div className={className}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={onClick} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}

export default RadioSwitch;
