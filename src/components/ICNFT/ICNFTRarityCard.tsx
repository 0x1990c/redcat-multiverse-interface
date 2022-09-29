import { useTranslation } from 'next-i18next';
import character from '../../../pages/character';
import styles from './ICNFTRarityCard.module.scss';

const ICNFTRarityCard = ({ className, data }: any) => {
  const { t } = useTranslation('icnft');

  const catImg = () => {
    switch (className) {
      case 'essential':
        return '/images/inception/cat_essential.png';
      case 'rare':
        return '/images/inception/cat_rare.png';
      case 'legendary':
        return '/images/inception/cat_legendary.png';
      default:
        return '/images/inception/cat_essential.png';
    }
  }

  return (
    <div className={`${styles.rarityCard} ${styles[className]}`}>
      <div className={styles.cardHeader}>
        <p className={styles.rarityCategory}>{t(`rarity.${className}.category`)}</p>
        <p className={styles.rarityCategoryNFT}>INCEPTION NFT</p>
      </div>
      <div className={`${styles.rarityCat} ${styles[className]}`}>
        <div className={styles.catBanner}>
          <div>PFP</div>
          <div>Ready</div>
        </div>
      </div>
      <div className={`${styles.availableNumber} ${styles[className]}`}>
        {t(`rarity.${className}.available`)}
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.cardContentItem} ${styles.character} ${styles[className]}`}>
          <div className={styles.characterIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>{t('rarity.characterNFT')}</div>
            {data.character.map((item: any, idx: any) => {
              return (
                <div key={idx}>{t(`rarity.${className}.character.${item}`)}</div>
              )
            })}
          </div>
        </div>
        <div className={`${styles.cardContentItem} ${styles.card} ${styles[className]}`}>
          <div className={styles.cardIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>{t('rarity.playCardNFT')}</div>
            {data.playCard.map((item: any, idx: any) => {
              return (
                <div key={idx}>{t(`rarity.${className}.playCard.${item}`)}</div>
              )
            })}
          </div>
        </div>
        <div className={`${styles.cardContentItem} ${styles.game} ${styles[className]}`}>
          <div className={styles.gameIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>{t('rarity.inGameItems')}</div>
            {data.inGame.map((item: any, idx: any) => {
              return (
                <div key={idx}>{t(`rarity.${className}.inGame.${item}`)}</div>
              )
            })}
          </div>
        </div>
        <img className={`${styles.catImg} ${styles[className]}`} src={catImg()} />
      </div>
    </div>
  )
}

export default ICNFTRarityCard;
