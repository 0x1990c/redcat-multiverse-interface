import cx from 'classnames';
import styles from "./CommunityModal.module.scss"
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import TeamGrid from '../../components/Team/TeamGrid'

import CloseIcon from '../Icons/CloseIcon';
import CommunityTeam from './modals/CommunityTeam';

// gsap.registerPlugin(Flip);

const CommunityModal = ({ content, closeModal }: any) => {
  const { title, text, item, id } = content;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const closeIconColor = () => {
    if (currentTheme === 'dark') {
      switch (item) {
        case 'item_e':
          return '#e83324';
        default:
          return '#fff';
      }
    }
    return '#000';
  }

  const modalContentComponent = () => {
    switch (item) {
      case 'item_a':
        return (<p>this is white paper modal</p>)
      case 'item_b':
        return (<p>This is manifesto</p>)
      case 'item_c':
        return (<p>This is rcm labs</p>)
      case 'item_d':
        return (<p>This is RCM insiders</p>)
      case 'item_e':
        return (<CommunityTeam />)
      case 'item_f':
        return (<p>this is updates</p>)
      case 'item_g':
        return (<p>this is PRESS</p>)
      default:
        return (<p>Oops, something went wrong!!!</p>)
    }
  }

  return (
    <div className={cx(styles.community_modal, styles[item])}>
      <div className={styles.close} onClick={closeModal}>
        <Image src={CloseIcon} width={48} height={48} />
      </div>
      <div className={cx(styles.header)}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={cx(styles.main_content)}>
        {id === '6' ? (
          <div>
            <p className={styles.description}>Here’s our team of the curious and crazy game changers.</p>
            <TeamGrid />
          </ div>
        )
          :
          (
            <div className={cx(styles.content)}>
              {text && text.map((value: string, index: string) => (
                <p className={value.length > 20 ? styles.text_section : styles.title_section} key={index}>{value}</p>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default CommunityModal;