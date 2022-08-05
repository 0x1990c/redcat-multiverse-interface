import { useTheme } from 'next-themes';
import { useTranslation } from 'next-i18next';
import styles from './CommunityManifesto.module.scss';

const CommunityManifesto = () => {
  const { t } = useTranslation('communityPage');
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (<div className={styles.manifestoContainer}>
    <div className={styles.leftCol}>
      <p className={styles.subTitle}>{t('manefisto.subtitle')}</p>
      <div className={`${styles.item} ${styles.backOrangeLight}`}>
        {t('manefisto.item_1')}
      </div>
      <div className={`${styles.item} ${styles.backBlue}`}>
        {t('manefisto.item_2')}
      </div>
      <div className={`${styles.item} ${styles.backOrangeRed}`}>
        <p>{t('manefisto.item_3_1')}</p>
        <p>{t('manefisto.item_3_2')}</p>
      </div>
      <div className={`${styles.item} ${styles.backDarkBlue}`}>
        {t('manefisto.item_4')}
      </div>
      <div className={`${styles.item} ${styles.backYellow}`}>
        {t('manefisto.item_5')}
      </div>
    </div>
    <div className={styles.rightCol}>
      <img src={currentTheme === 'dark' ? '/images/community/manifesto_glasses_dm.png' : '/images/community/manifesto_glasses.png'} />
      {/* <img src='/images/community/manifesto_galsses.png' /> */}
    </div>
  </div >);
};

export default CommunityManifesto;
