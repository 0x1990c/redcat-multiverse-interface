import Image from 'next/image';
import { IMAGE_BLUR_DATA_URL_PINK } from '../../../utilities/constants';
import styles from './CommunityTeamMemberModal.module.scss';

const CommunityTeamMemberModal = ({ info, onClose }: any) => {
  const {
    image,
    firstName,
    lastName,
    bio
  } = info;

  return (<div className={styles.teamMemberModal}>
    <div className={styles.teamDescription}>
      <div>Here’s our team of the curious and crazy game changers.</div>
    </div>
    {/* <div className={styles.memberImg}>
      {memberImg && (
        
      )}
    </div>
    <img src={image} alt="TM" /> */}
    <div className={styles.memberImg}>
      <Image
        src={image}
        alt="TeamMember"
        layout='fill'
        placeholder='blur'
        blurDataURL={IMAGE_BLUR_DATA_URL_PINK}
        objectFit='contain'
      />
    </div>

    <div className={styles.memberInfo}>
      <div className={styles.fullName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.bio}>{bio}</div>
    </div>
    <button className={styles.closeBtn} onClick={onClose} >Close</button>
  </div>);
}

export default CommunityTeamMemberModal;