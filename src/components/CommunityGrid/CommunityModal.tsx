import cx from 'classnames';
import styles from "./CommunityModal.module.scss"
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import TeamGrid from '../../components/Team/TeamGrid'
import CloseIcon from '../../../public/images/close.svg'
import Image from 'next/image'

// gsap.registerPlugin(Flip);

const CommunityModal = ({ content, closeModal }: any) => {
  const { title, text, item, id } = content;
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