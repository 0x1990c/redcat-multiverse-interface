import React from 'react'
import cx from 'classnames';
import styles from "./CommunityModal.module.scss"
import { useTheme } from 'next-themes'
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import TeamGrid from '../../components/Team/TeamGrid'
import CloseIcon from '../Icons/CloseIcon';
import CommunityTeam from './modals/CommunityTeam';
import CommunityRCMLabs from './modals/CommunityRCMLabs';
import CommunityRCMInsiders from './modals/CommunityRCMInsiders';
import CommunityManifesto from './modals/CommunityManifesto';
import CommunityUpdates from './modals/CommunityUpdates';
import CommunityPress from './modals/CommunityPress';

// gsap.registerPlugin(Flip);

const CommunitySubscribeForm = ({ closeModal }: any) => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const closeIconColor = () => {
    return currentTheme === 'dark' ? '#fff' : '#000';
  }


  return (
    <div className={cx(styles.community_modal)}>
      <div className={styles.close} onClick={closeModal}>
        <CloseIcon width='48px' height='48px' fill={closeIconColor()} />
      </div>
      <div className={cx(styles.header)}>
        <h3 className={styles.title}>xxxxx SubscribeForm</h3>
      </div>
    </div>
  );
}

export default CommunitySubscribeForm;