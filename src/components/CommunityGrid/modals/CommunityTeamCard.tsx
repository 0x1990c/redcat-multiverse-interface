import { useRef } from 'react'
import cx from 'classnames';
import styles from './CommunityTeamCard.module.scss'

const CommunityTeamCard = ({ teamMemberInfo, index, onSelect, isSelected }: any) => {
  const {
    imageCard,
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
      <img
        className={cx(styles.photo)}
        src={imageCard}
        alt={role + ': ' + firstName + ' ' + lastName}
        width={154}
        height={154}
      />
      <div className={cx(styles.personal_info)}>
        <div className={cx(styles.full_name)} >
          {firstName + ' ' + lastName}
        </div>
        <div className={cx(styles.role)}>
          {role}
        </div>
      </div>
    </div>
  );
}

export default CommunityTeamCard;