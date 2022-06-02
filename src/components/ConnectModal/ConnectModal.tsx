import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import { useScreenWidth } from '../../hooks/useScreenCheck';
import CloseIcon from '../Icons/CloseIcon';
import styles from './ConnectModal.module.scss';


const ConnectModal = ({ onClose }: any) => {
  const [email, setEmail] = useState();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [resultShow, setResultShow] = useState(false);
  const { systemTheme, theme } = useTheme();
  const { isMobile } = useScreenWidth();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const closeIconSize = () => {
    if (isMobile) {
      return { width: '24px', height: '24px' };
    }
    return { width: '48px', height: '48px' };
  }

  const closeIconColor = () => {
    return currentTheme === 'dark' ? '#fff' : '#000';
  }

  const backgroundImg = () => {
    return isMobile ? './images/community/connect_form_mobile.png' : './images/community/connect_form_desktop.png';
  }

  const handleClose = () => {
    onClose();
  }

  const handleClick = async () => {
    setIsSubscribing(true);
    setIsError(false);
    setResultShow(false);
    const res = await fetch("/api/subscribe", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email
      })
    });

    const { error } = await res.json();
    if (error) {
      console.log('eeror', error);
      setIsError(true);
      setIsSubscribing(false);
      setResultShow(true);
      return;
    }
    setIsError(false);
    setIsSubscribing(false);
    setResultShow(true);
  }

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  }

  return (
    <div className={styles.modalContainer}>
      <img src={backgroundImg()} className={styles.background} alt='BACK' />
      <div className={styles.close} onClick={handleClose}>
        <CloseIcon width={closeIconSize().width} height={closeIconSize().height} fill={closeIconColor()} />
      </div>

      <p className={styles.title}>CONNECT TO THE MULTIVERSE</p>
      <div className={styles.submitForm}>
        <div className={styles.formInput}>
          <input type='email' placeholder='email@email.com' onChange={handleChange} />
          <button onClick={handleClick}>
            {isSubscribing ? 'SUSCRIBING...' : 'SUBSCRIBE'}
          </button>
        </div>
        {resultShow && (
          <p className={`${styles.resultText} ${isError ? styles.error : ''}`}>
            {isError ? 'Something went wrong!' : 'Successfully done!'}
          </p>
        )}
      </div>
    </div>
  )
}

export default ConnectModal;
