import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from '../src/styles/icnft.module.scss'
import ICNFTSlide from '../src/components/ICNFT/TopSlide/ICNFTSlide'
import ICNFTRarityCard from '../src/components/ICNFT/ICNFTRarityCard'
import ICNFTOwnerReward from '../src/components/ICNFT/ICNFTOwnerReward'
import ICNFTMintingDetail from '../src/components/ICNFT/ICNFTMintingDetail'
import ICNFTCharacterRoster from '../src/components/ICNFT/ICNFTCharacterRoster'
import ICNFTBuiltStatus from '../src/components/ICNFT/ICNFTBuiltStatus'
import ICNFTFAQ from '../src/components/ICNFT/ICNFTFAQ'

const ICNFT: NextPage = () => {
  const { t } = useTranslation('icnft');

  const rarityData = {
    essential: {
      character: [0, 1],
      playCard: [0, 1],
      inGame: [0, 1]
    },
    rare: {
      character: [0, 1, 2],
      playCard: [0, 1, 2],
      inGame: [0, 1, 2]
    },
    legendary: {
      character: [0, 1, 2, 3],
      playCard: [0, 1, 2],
      inGame: [0, 1, 2, 3]
    }
  }

  return (
    <div className={styles.icNFTContainer}>
      <ICNFTSlide />
      <div className={styles.collectionAdvertSection}>
        <p className={styles.collectionAdvertTitle}>
          {t('collectionAdvertTitle')}
        </p>
        <p className={styles.collectionAdvertDescription}>
          {t('collectionAdvertDescription')}
        </p>
        <div className={styles.collectionAdvertComment}>
          <div>{t('collectionAdvertComment')}</div>
          <a className={styles.fellowShipLink}>{t('applyRCMFellowship')}</a>
        </div>
      </div>
      <div className={styles.raritySection}>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='essential' data={rarityData.essential} />
        </div>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='rare' data={rarityData.rare} />
        </div>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='legendary' data={rarityData.legendary} />
        </div>
      </div>
      <ICNFTOwnerReward />
      <ICNFTMintingDetail />
      <ICNFTCharacterRoster />
      <ICNFTBuiltStatus />
      <ICNFTFAQ />
    </div>
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'icnft'])
  }
});

export default ICNFT;
