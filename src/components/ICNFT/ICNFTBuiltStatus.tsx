import { useTranslation } from 'next-i18next';
import ICNFTBuiltIconETH from './BuiltIcons/ICNFTBuiltIconETH';
import ICNFTBuiltIconIPFS from './BuiltIcons/ICNFTBuiltIconIPFS';
import ICNFTBuiltIconKey from './BuiltIcons/ICNFTBuiltIconKey';
import ICNFTBuiltIconUtility from './BuiltIcons/ICNFTBuiltIconUtility';
import styles from './ICNFTBuiltStatus.module.scss';

const ICNFTBuiltStatus = () => {
  const { t } = useTranslation('icnft');

  return (
    <div className={styles.builtStatus}>
      <div className={styles.builtLabel}>{t('builtStatus.label')}</div>
      <div className={styles.builtContent}>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconETH />
          <div className={styles.builtItemText}>{t('builtStatus.iconETH')}</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconIPFS />
          <div className={styles.builtItemText}>{t('builtStatus.iconIPFS')}</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconUtility />
          <div className={styles.builtItemText}>{t('builtStatus.iconUtility')}</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconKey />
          <div className={styles.builtItemText}>{t('builtStatus.iconRedCat')}</div>
        </div>
      </div>
    </div>
  )
}

export default ICNFTBuiltStatus;
