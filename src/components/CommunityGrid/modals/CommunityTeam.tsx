import { useState, useEffect } from 'react'
import cx from 'classnames';
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

  const selectedMember = selected === null ? null : teamMembers[selected]

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
                <p>Here’s our team of curious and crazy game changers.</p>
                <p>
                  The RCM Labs leadership team is supported by more than 50 highly accomplished individuals from around the globe. This specialized group includes thought leaders, community managers, artists, advisors and collaborators who are all contributing to the success of this project. It also includes more than 25 investors from the U.S., Europe and Asia.
                </p>
              </div>
              <div className={cx(styles.team_grid)}>
                {teamMembers.map((teamMember, index) => (
                  <CommunityTeamCard
                    teamMemberInfo={teamMember}
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
