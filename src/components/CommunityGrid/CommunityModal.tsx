import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames';
import styles from "./CommunityModal.module.scss"
import { useTheme } from 'next-themes'
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useScreenWidth } from '../../hooks/useScreenCheck';
import CloseIcon from '../Icons/CloseIcon';
import CommunityTeam from './modals/CommunityTeam';
import CommunityRCMLabs from './modals/CommunityRCMLabs';
import CommunityRCMInsiders from './modals/CommunityRCMInsiders';
import CommunityManifesto from './modals/CommunityManifesto';
import CommunityUpdates from './modals/CommunityUpdates';
import CommunityPress from './modals/CommunityPress';

// gsap.registerPlugin(Flip);

const CommunityModal = ({ content, closeModal }: any) => {
  const { systemTheme, theme } = useTheme();
  const { title, text, item, id } = content;
  const { isMobile } = useScreenWidth();
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const closeIconColor = () => {
    switch (item) {
      case 'item_b':
        return '#f2957c';
      case 'item_c':
        return '#7192f3';
      case 'item_d':
        return '#f2957c';
      case 'item_e':
        return '#e83324';
      default:
        return currentTheme === 'dark' ? '#fff' : '#000';
    }
  }

  const closeIconSize = () => {
    if (isMobile) {
      return { width: '24px', height: '24px' };
    }
    return { width: '48px', height: '48px' };
  }

  const handleOpenMemberModal = () => {
    setMemberModalOpen(true);
  }

  const handleClose = () => {
    // if (memberModalOpen) {
    //   setMemberModalOpen(false);
    // }

    setMemberModalOpen(false);
    closeModal();
  }

  const handleCloseMemberModal = () => {
    setMemberModalOpen(false);
  }

  const modalContentComponent = () => {
    switch (item) {
      case 'item_a':
        return (<p>this is white paper modal</p>)
      case 'item_b':
        return (<CommunityManifesto />)
      case 'item_c':
        return (<CommunityRCMLabs />)
      case 'item_d':
        return (<CommunityRCMInsiders />)
      case 'item_e':
        return (
          <CommunityTeam memberModalOpen={memberModalOpen} onOpenMemberModal={handleOpenMemberModal} onCloseMemberModal={handleCloseMemberModal} />
        )
      case 'item_f':
        return (<CommunityUpdates />)
      case 'item_g':
        return (<CommunityPress />)
      default:
        return (<p>Empty modal</p>)
    }
  }

  return (
    <div className={cx(styles.community_modal, styles[item], memberModalOpen ? styles.memberModal : '')}>
      <div className={styles.close} onClick={handleClose}>
        <CloseIcon width={closeIconSize().width} height={closeIconSize().height} fill={closeIconColor()} />
      </div>
      <div className={cx(styles.header)}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {modalContentComponent()}
    </div>
  );
}

export default CommunityModal;