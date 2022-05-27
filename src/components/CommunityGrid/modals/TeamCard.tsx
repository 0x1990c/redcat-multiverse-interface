import { useRef } from 'react'
import Image from 'next/image'
import cx from 'classnames';
import styles from './TeamCard.module.scss'

const TeamCard = ({ teamMemberInfo, index, onSelect, isSelected }: any) => {

  const {
    photoURL,
    firstName,
    lastName,
    role,
  } = teamMemberInfo;

  const boxReference = useRef(null);

  const handleClick = () => {
    const reference: any = boxReference.current
    onSelect({
      index,
      boxLocation: {
        x: reference.offsetLeft,
        y: reference.offsetTop + reference.clientHeight,
      }
    });
  }

  return (
    <div
      className={cx([styles.team_card, isSelected && styles.team_card_selected])}
      onClick={handleClick}
      ref={boxReference}
    >
      <div className={cx(styles.photo)}>
        <Image
          src={photoURL}
          alt={role + ': ' + firstName + ' ' + lastName}
          width={154}
          height={154}
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
      </div>
    </div>
  );
}

export default TeamCard;