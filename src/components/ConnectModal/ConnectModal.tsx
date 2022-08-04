import React from 'react';
import { useScreenWidth } from '../../hooks/useScreenCheck';
import CloseIcon from '../Icons/CloseIcon';
import styles from './ConnectModal.module.scss';

const ConnectModal = ({ onClose }: any) => {
  const { isMobile } = useScreenWidth();


  const closeIconSize = () => {
    if (isMobile) {
      return { width: '24px', height: '24px' };
    }
    return { width: '48px', height: '48px' };
  }

  const backgroundImg = () => {
    // return '/images/community/community_05.png';
    return '/images/community/connect_form_desktop.png';
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <div className={styles.modalContainer}>
      <img src={backgroundImg()} className={styles.background} alt='BACK' />
      <div className={styles.close} onClick={handleClose}>
        <CloseIcon width={closeIconSize().width} height={closeIconSize().height} fill='#fff' />
      </div>

      <p className={styles.title}>CONNECT TO THE MULTIVERSE</p>
      <div className={styles.submitForm}>
        {/* <iframe
          src="https://blog.redcatmultiverse.io/embed"
          width="480"
          height="320"
          className={styles.subscribeIframe}
          frameBorder="0"
          scrolling="no"
        /> */}
        <iframe
          src="https://blog.redcatmultiverse.io/embed"
          className={styles.subscribeIframe}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  )
}

export default ConnectModal;
