import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import CommunityCard from './CommunityCard'
import CommunityModal from './CommunityModal'
import styles from './CommunityGrid.module.scss'
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useScreenWidth } from '../../hooks/useScreenCheck';
import { contents } from './constants';
import CommunitySubscribeForm from './CommunitySubscribeForm';

const CommunityGrid = () => {
  const { isMobile } = useScreenWidth();

  const commGridRef: any = useRef(null);

  const [commGridDimension, setCommGridDimensions] = useState<any>({});

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>({});

  const handleClick = (id: number) => {
    const numberId = parseInt(`${id}`);

    if (numberId === 0 || numberId === 2 || numberId === 3 || numberId === 4) {
      document.body.style.overflowY = isModalOpen ? 'auto' : 'hidden';

      setIsModalOpen(!isModalOpen);
      setModalContent(contents[id]);
      return;
    }

    if (numberId === 1) {
      // should be white paper url
      window.open('https://redcatmultiverse.substack.com/', '_blank');
      return;
    }

    // Updates
    if (numberId === 5) {
      window.open('https://redcatmultiverse.substack.com/', '_blank');
      return;
    }

    // press
    if (numberId === 6) {
      window.open('https://redcatmultiverse.substack.com/', '_blank');
      return;
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflowY = 'auto';
    setModalContent({})
  }

  return isMobile ? (
    <div>
      <div className={styles.community_grid}>
        {contents.map((content, contId) => (
          <CommunityCard content={content} key={contId} handleClick={handleClick} />
        ))}
      </div>
      {isModalOpen === true && (
        <div className={cx(styles.modalBackDrop)} style={commGridDimension} >
          <div className={styles.modalContainer}>
            <CommunityModal content={modalContent} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  )
    :
    (
      <div>
        <div className={styles.community_grid} ref={commGridRef}>
          <div className={cx(styles.column)}>
            {contents.map((content, contId) => {
              if (content.column === "column_1") {
                return (
                  <CommunityCard content={content} key={contId} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
          <div className={styles.column}>
            {contents.map((content, contId) => {
              if (content.column === "column_2") {
                return (
                  <CommunityCard content={content} key={contId} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
          <div className={styles.column}>
            {contents.map((content, contId) => {
              if (content.column === "column_3") {
                return (
                  <CommunityCard content={content} key={contId} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
        </div>
        {isModalOpen === true && (
          <div className={styles.modalBackDrop}>
            <div className={styles.modalContainer}>
              <CommunityModal content={modalContent} closeModal={closeModal} />
            </div>
          </div>
        )
        }
      </div>
    );
}

export default CommunityGrid;


