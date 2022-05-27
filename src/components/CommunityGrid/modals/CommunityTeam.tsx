import { useState, useEffect } from 'react'
import cx from 'classnames';
import TeamCard from './TeamCard'
import styles from './TeamGrid.module.scss'
import teamMemberImage from '../../../public/images/team_member.png'
import TeamCardModal from './TeamCardModal'

const teamMembers = [
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: ' 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: ' 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },
  {
    photoURL: teamMemberImage,
    firstName: 'Andres',
    lastName: 'Angel',
    role: 'Lead Designer',
    linkedinURL: ' ',
    email: 'andres@bkdf.nyc',
    bio: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a diam pulvinar, cursus quam in, eleifend ex. Nullam interdum, ligula et tincidunt venenatis, enim tellus venenatis nunc, at pulvinar leo mi non mi. Nam venenatis eu arcu ut bibendum. Nam vel tristique urna. Fusce nec blandit nibh. Maecenas ac lacus eget purus tempor cursus quis eu velit. In hac habitasse platea dictumst. Phasellus a neque ut velit dapibus ultricies.',
  },

];

declare interface BoxLocation {
  x: number,
  y: number
}

const Loading = () => (
  <div>
    Loading
  </div>
)

const getAbsoluteLocation = (selectedBoxLocation: BoxLocation, index: number) => {
  return {
    top: `${selectedBoxLocation.y - (index < 3 ? 5 : 455)}px`,
    left: `${selectedBoxLocation.x}px`
  }
}

const CommunityTeam = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [selectedBoxLocation, setSelectedBoxLocation] = useState<BoxLocation>({
    x: 0,
    y: 0
  })

  const handleOnSelect = ({ index, boxLocation }: { index: number, boxLocation: BoxLocation }) => {
    setSelected(index === selected ? null : index)
    setSelectedBoxLocation(boxLocation)
  }

  const selectedMember = selected === null ? null : teamMembers[selected]
  const [isMobile, setIsMobile] = useState(false);
  const [dimension, setDimension] = useState(0);

  const closeModal = () => {
    setSelected(null)
  }

  const updateDimension = () => {
    setDimension(window.innerWidth);
    setIsMobile(dimension <= 1024);
  }

  useEffect(() => {
    updateDimension();
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);

  }, [dimension]);

  return teamMembers.length ?
    (
      <div className={cx(styles.team_grid)}>
        {teamMembers.map((teamMember, index) => (
          <TeamCard
            teamMemberInfo={teamMember}
            key={index}
            index={index}
            onSelect={handleOnSelect}
            isSelected={index === selected}
            isMobile={isMobile}
          />
        ))}
        {selected !== null && (
          isMobile ? (
            <TeamCardModal info={selectedMember} onClose={closeModal} />
          ) :
            (
              <div
                style={getAbsoluteLocation(selectedBoxLocation, selected)}
                className={cx(styles.bio_description)}
              >
                {selectedMember?.bio}
              </div>
            )
        )}
      </div>
    )
    : <Loading />

}

export default CommunityTeam;
