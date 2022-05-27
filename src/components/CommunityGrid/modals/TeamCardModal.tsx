import Image from 'next/image'
import cx from 'classnames'
import styles from "./TeamCardModal.module.scss"


const TeamCardModal = ({ info, onClose }: any) => {

  const {
    photoURL,
    firstName,
    lastName,
    role,
    bio,
  } = info;

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.photo)}>
        <Image
          src={photoURL}
          alt={role + ': ' + firstName + ' ' + lastName}
          width={178}
          height={178}
        />
      </div>
      <div className={cx(styles.personal_info)}>
        <div className={cx(styles.full_name)} >
          {firstName + ' ' + lastName}
        </div>
        <div className={cx(styles.role)}>
          {role}
        </div>
        <div className={cx(styles.contact)}>
          <a href=''>
            <img src='./images/discord-icon.svg' />
          </a>
          <a href=''>
            <img src='./images/ig-icon.svg' />
          </a>
        </div>
        <div className={cx(styles.bio_description)}>
          {bio}
        </div>
        <button className={styles.close} onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
}

export default TeamCardModal;