import React from 'react';
import { useTheme } from 'next-themes'
import { useScreenWidth } from '../../hooks/useScreenCheck';
import CloseIcon from '../Icons/CloseIcon';
import styles from './ConnectModal.module.scss';



const ConnectModal = ({ onClose }: any) => {
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


    // try {

    // } catch (error) {
    //   console.log('error =>', error);
    // }
    // console.log('subscribe xxx', process.env.CC_APIKEY, process.env.CC_ACCESSTOKEN, process.env.CC_RCM_LIST_ID);
    // const subscribeData = {
    //   lists: [
    //     {
    //       id: `${process.env.CC_RCM_LIST_ID}`
    //     }
    //   ],
    //   email_addresses: [
    //     {
    //       "email_address": "hcccdl@example.com"
    //     }
    //   ]
    // }
    // const res = await fetch(`https://api.constantcontact.com/v2/contacts?action_by=ACTION_BY_OWNER&api_key=${process.env.CC_APIKEY}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Authorization': `Bearer ${process.env.CC_ACCESSTOKEN}`,
    //     'Access-Control-Allow-Origin': "*",
    //     'Access-Control-Allow-Headers': '*'
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(subscribeData)
    // });

    // console.log('res', res);

    // const { error } = await res.json();
    // if (error) {
    //   console.log('error ==>', error);
    //   return;
    // }

    const res = await fetch("/api/subscribe", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });


    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
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
          <input type='email' placeholder='email@email.com' />
          <button onClick={handleClick}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default ConnectModal;
