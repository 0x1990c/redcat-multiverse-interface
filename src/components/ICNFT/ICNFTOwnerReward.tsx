import { useTranslation } from 'next-i18next';
import styles from './ICNFTOwnerReward.module.scss';
import ICNFTIconAvatar from './RewardIcons/ICNFTIconAvatar';
import ICNFTIconBrandedGraphic from './RewardIcons/ICNFTIconBrandedGraphic';
import ICNFTIconReward from './RewardIcons/ICNFTIconReward';
import ICNFTIconSanura from './RewardIcons/ICNFTIconSanura';
import ICNFTIconShield from './RewardIcons/ICNFTIconShield';
import ICNFTIconTradingCard from './RewardIcons/ICNFTIconTradingCard';

const ICNFTOwnerReward = () => {
  const { t } = useTranslation('icnft');

  return (
    <>
      <div className={styles.ownerReward}>
        <div className={styles.ownerRewardTitle}>
          {t('ownerReward.title')}
        </div>
        <div className={styles.iconSection}>
          <div className={`${styles.iconItem} ${styles.badge}`}>
            <ICNFTIconShield />
            <div className={styles.rewardAmount}>1</div>
            <div className={styles.rewardText}>{t('ownerReward.iconBadge')}</div>
          </div>
          <div className={`${styles.iconItem} ${styles.avatar}`}>
            <ICNFTIconAvatar />
            <div className={styles.rewardAmount}>1</div>
            <div className={styles.rewardText}>{t('ownerReward.iconAvatar')}</div>
          </div>
          <div className={`${styles.iconItem} ${styles.tradingCard}`}>
            <ICNFTIconTradingCard />
            <div className={styles.rewardAmount}>1</div>
            <div className={styles.rewardText}>{t('ownerReward.iconTradingCard')}</div>
          </div>
          <div className={`${styles.iconItem} ${styles.brandedGraphic}`}>
            <ICNFTIconBrandedGraphic />
            <div className={styles.rewardAmount}>1</div>
            <div className={styles.rewardText}>{t('ownerReward.iconVideo')}</div>
          </div>
          <div className={`${styles.iconItem} ${styles.sanura}`}>
            <ICNFTIconSanura />
            <div className={styles.rewardAmount}>1</div>
            <div className={styles.rewardText}>{t('ownerReward.iconRedCat')}</div>
          </div>
        </div>
        <div className={styles.icNFTRewardContainer}>
          <ICNFTIconReward />
          <div className={styles.rewardDescription}>
            {t('ownerReward.text')}
          </div>
        </div>
      </div>
      <div className={styles.multiverseGateContainer}>
        <div className={styles.multiverseGate}>
          <img src='/images/inception/multiversal_gate.png' />
          <div className={styles.multiverseContent}>
            <p className={styles.multiverseTitle}>{t('multiverseGate.title')}</p>
            <p className={styles.multiverseText}>{t('multiverseGate.text1')}</p>
            <p className={styles.multiverseText}>{t('multiverseGate.text2')}</p>
            <p className={styles.multiverseText}>{t('multiverseGate.text3')}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ICNFTOwnerReward;
