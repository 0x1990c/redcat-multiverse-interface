import styles from './CommunityTeamMember.module.scss';

const CommunityTeamMember = ({ info }: any) => {
  const {
    image,
    firstName,
    lastName,
    role,
    bio
  } = info;
  return (<div className={styles.teamMemberContainer}>
    <img src={image} />
    <div className={styles.memberInfo}>
      <div className={styles.fullName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.bio}>{bio}</div>
    </div>
  </div>)
};

export default CommunityTeamMember;
