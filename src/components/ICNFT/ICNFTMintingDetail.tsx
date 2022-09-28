import { useTranslation } from 'next-i18next';
import styles from './ICNFTMintingDetail.module.scss';

const ICNFTMintingDetail = () => {
  const { t } = useTranslation('icnft');
  return (
    <div className={styles.icNFTMintingDetailContainer}>
      <p className={styles.detailTitle}>{t('mintingDetails.label')}</p>
      <div className={styles.mintingContent}>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>{t('mintingDetails.launchDate')}</div>
          <div className={styles.itemContent}>{t('mintingDetails.launchDate_value')}</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>{t('mintingDetails.supply')}</div>
          <div className={styles.itemContent}>8888</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>{t('mintingDetails.mintingLimit')}</div>
          <div className={styles.itemContent}>{t('mintingDetails.mintingLimit_value')}</div>
        </div>
      </div>
    </div>
  )
}

export default ICNFTMintingDetail;
