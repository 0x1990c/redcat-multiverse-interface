import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IMAGE_BLUR_DATA_URL_PINK } from '../../../utilities/constants';
import EmojiIcon from '../../Icons/EmojiIcon/EmojiIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon/LinkedinIcon';
import styles from './CommunityTeamMember.module.scss';

const CommunityTeamMember = ({ info }: any) => {
  const {
    image,
    firstName,
    lastName,
    role,
    social,
    noLinkedin,
    bio
  } = info;
  const [memberImg, setMemberImg] = useState();

  useEffect(() => {
    setMemberImg(image)
  }, [image]);

  return (<div className={styles.teamMemberContainer}>
    <div className={styles.memberImg}>
      {memberImg && (
        <Image
          src={memberImg}
          alt="TeamMember"
          layout='fill'
          placeholder='blur'
          blurDataURL={IMAGE_BLUR_DATA_URL_PINK}
          objectFit='contain'
        />
      )}
    </div>

    {/* <img src={image} alt="TM" /> */}
    <div className={styles.memberInfo}>
      <div className={styles.fullName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.subInfo}>
        <a className={styles.socialLink} href={social} target='_blank' rel="noreferrer">
          {noLinkedin ? <EmojiIcon /> : <LinkedinIcon />}
        </a>
        <div className={styles.role}>{role}</div>
      </div>
      <div className={styles.bio}>{bio}</div>
    </div>
  </div>)
};

export default CommunityTeamMember;
