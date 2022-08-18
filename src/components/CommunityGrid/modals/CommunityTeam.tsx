import { useState, useEffect } from 'react'
import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import { useScreenWidth } from '../../../hooks/useScreenCheck';
import CommunityTeamCard from './CommunityTeamCard'
import styles from './CommunityTeam.module.scss'
import { teamMembers } from '../constants';
import CommunityTeamMember from './CommunityTeamMember';
import CommunityTeamMemberModal from './CommunityTeamMemberModal';


declare interface BoxLocation {
  x: number,
  y: number
}

const Loading = () => (
  <div>
    Loading
  </div>
)

const CommunityTeam = ({ memberModalOpen, onOpenMemberModal, onCloseMemberModal }: any) => {
  const { t } = useTranslation('communityPage');

  const { isMobile } = useScreenWidth();
  const [selected, setSelected] = useState<number | null>(0)
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [selectedBoxLocation, setSelectedBoxLocation] = useState<BoxLocation>({
    x: 0,
    y: 0
  })

  const handleOnSelect = ({ index, boxLocation }: { index: number, boxLocation: BoxLocation }) => {
    if (index !== selected) {
      setSelected(index);
    }
    if (isMobile) {
      setIsMemberModalOpen(true);
      onOpenMemberModal();
    }
    setSelectedBoxLocation(boxLocation);
  }

  const selectedMember = selected === null ? null : {
    ...teamMembers[selected],
    firstName: t(`team.members.${selected}.firstName`),
    lastName: t(`team.members.${selected}.lastName`),
    role: t(`team.members.${selected}.role`),
    bio: t(`team.members.${selected}.bio`)
  }

  const handleCloseModal = () => {
    // setSelected(null)
    onCloseMemberModal();
  }

  return teamMembers.length ?
    (
      <div className={styles.teamContent}>
        {
          (!isMobile || (isMobile && memberModalOpen === false)) && (
            <div className={styles.leftCol}>
              <div className={styles.teamDescription}>
                <p>{t('team.description_1')}</p>
                <p>{t('team.description_2')}</p>
              </div>
              <div className={cx(styles.team_grid)}>
                {teamMembers.map((teamMember, index) => (
                  <CommunityTeamCard
                    teamMemberInfo={{
                      ...teamMember,
                      firstName: t(`team.members.${index}.firstName`),
                      lastName: t(`team.members.${index}.lastName`),
                      role: t(`team.members.${index}.role`),
                      bio: t(`team.members.${index}.bio`)
                    }}
                    key={index}
                    index={index}
                    onSelect={handleOnSelect}
                    isSelected={index === selected}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          )
        }

        {
          isMobile
            ? (memberModalOpen === true && <CommunityTeamMemberModal info={selectedMember} onClose={handleCloseModal} />)
            : (
              <div className={styles.rightCol}>
                <CommunityTeamMember info={selectedMember} />
              </div>
            )
        }
      </div>
    )
    : <Loading />

}

export default CommunityTeam;
