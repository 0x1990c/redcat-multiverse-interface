import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useICNFTContext } from '../../../contexts/ICNFTContext';
import styles from './ICNFTSlide.module.scss';

const ICNFTSlide = () => {
  const SLIDE_NUMBER = 8;

  const { t } = useTranslation('icnft');
  const { slideIdx, setSlideIdx } = useICNFTContext();

  const slideData = [
    {
      logoImg: '/images/inception/logo1.png',
      catImg: '/images/inception/cat1.png',
      textColor: '#f1d2c2',
      backgroundColor: '#0f5665',
      btnLabelColor: '#1b1628'
    },
    {
      logoImg: '/images/inception/logo2.png',
      catImg: '/images/inception/cat2.png',
      textColor: '#f0ed4a',
      backgroundColor: '#2a84bf',
      btnLabelColor: '#1b1628'
    },
    {
      logoImg: '/images/inception/logo3.png',
      catImg: '/images/inception/cat3.png',
      textColor: '#fafa06',
      backgroundColor: '#f761fe',
      btnLabelColor: '#1b1628'
    },
    {
      logoImg: '/images/inception/logo4.png',
      catImg: '/images/inception/cat4.png',
      textColor: '#fed',
      backgroundColor: '#e73b58',
      btnLabelColor: '#1b1628'
    },
    {
      logoImg: '/images/inception/logo5.png',
      catImg: '/images/inception/cat5.png',
      textColor: '#55372f',
      backgroundColor: '#d3feea',
      btnLabelColor: '#fff'
    },
    {
      logoImg: '/images/inception/logo6.png',
      catImg: '/images/inception/cat6.png',
      textColor: '#cc182d',
      backgroundColor: '#ffefe4',
      btnLabelColor: '#fff'
    },
    {
      logoImg: '/images/inception/logo7.png',
      catImg: '/images/inception/cat7.png',
      textColor: '#62e5f6',
      backgroundColor: '#111325',
      btnLabelColor: '#1b1628'
    },
    {
      logoImg: '/images/inception/logo8.png',
      catImg: '/images/inception/cat8.png',
      textColor: '#feeedc',
      backgroundColor: '#9c4d5b',
      btnLabelColor: '#1b1628'
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);

  const onWhiskerClickHandle = () => {
    setSlideIdx((selectedIdx + 1) % SLIDE_NUMBER);
    setSelectedIdx((selectedIdx + 1) % SLIDE_NUMBER);
  }

  return (
    <div className={styles.icNFTSlide}>
      <div className={styles.icNFTSlideItem} style={{ backgroundColor: slideData[selectedIdx].backgroundColor }}>
        <img src={slideData[selectedIdx].logoImg} className={styles.redCatLogo} alt='LOGO' />
        <div className={styles.whiskerWrapper}>
          <div className={styles.icNFTCatComment}>
            <svg className={styles.commentWrapper} viewBox="0 0 153 122" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M76.5 1C118.197 1 152 25.177 152 55c0 14.416-7.898 27.513-20.769 37.197 2.665 10.937 7.476 19.43 14.43 25.48 11.553 10.05-22.75-5.056-36.244-14.067C99.47 107.064 88.301 109 76.5 109 34.803 109 1 84.823 1 55S34.803 1 76.5 1z"
                stroke={slideData[selectedIdx].textColor}
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            <div className={styles.commentTxt} style={{ color: slideData[selectedIdx].textColor }}>
              {t('clickWhisker')}
            </div>
          </div>
          <img src={slideData[selectedIdx].catImg} className={styles.catImg} alt='CAT' />
          <div className={styles.whiskerClickable} onClick={onWhiskerClickHandle}></div>
        </div>
        <p className={styles.slideTitle} style={{ color: slideData[selectedIdx].textColor }}>{t('redCatMultiverse')}</p>
        <p className={styles.slideDescription} style={{ color: slideData[selectedIdx].textColor }}>
          {t('multiverseText1')}
        </p>
        <p className={styles.slideDescription} style={{ color: slideData[selectedIdx].textColor }}>
          {t('multiverseText2')}
        </p>
        <a
          className={styles.fellowShipBtn}
          style={{ background: slideData[selectedIdx].textColor, color: slideData[selectedIdx].btnLabelColor }}
          href='https://redcatmultiverse.co'
        >
          Apply for RCM Fellowship*
        </a>
        <p className={styles.fellowshipPerk} style={{ color: slideData[selectedIdx].textColor }}>{t('rcmFellowshipPerk')}</p>
      </div>
    </div>
  )
}

export default ICNFTSlide;
