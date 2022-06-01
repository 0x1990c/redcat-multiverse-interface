import styles from './CommunityTeamMemberModal.module.scss';

const CommunityTeamMemberModal = ({ info }: any) => {
  const {
    image,
    firstName,
    lastName,
    role,
    bio
  } = info;

  return (<div className={styles.modalBackDrop}>
    <img src={image} alt="TM" />
    <div className={styles.memberInfo}>
      <div className={styles.fullName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.bio}>{bio}</div>
    </div>
  </div>);
}

export default CommunityTeamMemberModal;