import { useTranslation } from 'next-i18next';
import styles from './ICNFTCharacterRoster.module.scss';
import ICNFTRosterCard from './ICNFTRosterCard';

const ICNFTCharacterRoster = () => {
  const { t } = useTranslation('icnft');

  const rosterContents = [
    {
      category: 'common',
      title: t('roster.common.title'),
      data: [
        t('roster.common.data.0'),
        t('roster.common.data.1'),
        t('roster.common.data.2'),
        t('roster.common.data.3'),
        t('roster.common.data.4'),
        t('roster.common.data.5'),
        t('roster.common.data.6'),
        t('roster.common.data.7'),
        t('roster.common.data.8'),
      ]
    },
    {
      category: 'uncommon',
      title: t('roster.uncommon.title'),
      data: [
        t('roster.uncommon.data.0'),
        t('roster.uncommon.data.1'),
        t('roster.uncommon.data.2'),
        t('roster.uncommon.data.3'),
        t('roster.uncommon.data.4'),
        t('roster.uncommon.data.5'),
        t('roster.uncommon.data.6'),
        t('roster.uncommon.data.7'),
        t('roster.uncommon.data.8'),
      ]
    },
    {
      category: 'rare',
      title: t('roster.rare.title'),
      data: [
        t('roster.rare.data.0'),
        t('roster.rare.data.1'),
        t('roster.rare.data.2'),
        t('roster.rare.data.3'),
        t('roster.rare.data.4'),
        t('roster.rare.data.5')
      ]
    },
    {
      category: 'legendary',
      title: t('roster.legendary.title'),
      data: [
        t('roster.legendary.data.0'),
        t('roster.legendary.data.1')
      ]
    }
  ]

  return (
    <div className={styles.characterRosterContainer}>
      <p className={styles.rosterTitle}>{t('roster.title')}</p>
      <p className={styles.rosterText}>{t('roster.text')}</p>
      <div className={styles.rosterCardContainer}>
        {rosterContents.map((roster, idx) => {
          return (
            <ICNFTRosterCard key={idx} title={roster.title} content={roster.data} category={roster.category} />
          )
        })}
      </div>
    </div>
  )
}

export default ICNFTCharacterRoster;
