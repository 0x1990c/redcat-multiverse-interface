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

  useEffect(() => {
    if (commGridRef) {
      const width = commGridRef.current.offsetWidth;
      const height = commGridRef.current.offsetHeight;

      const cssObj = window.getComputedStyle(commGridRef.current, null);
      const marginTop = parseFloat(cssObj.marginTop);
      const marginRight = parseFloat(cssObj.marginRight);
      const marginBottom = parseFloat(cssObj.marginBottom);
      const marginLeft = parseFloat(cssObj.marginLeft);

      const paddingTop = parseFloat(cssObj.paddingTop);
      const paddingRight = parseFloat(cssObj.paddingRight);
      const paddingBottom = parseFloat(cssObj.paddingBottom);
      const paddingLeft = parseFloat(cssObj.paddingLeft);

      const top = commGridRef.current.offsetTop;
      const left = commGridRef.current.offsetLeft;

      setCommGridDimensions({
        width: width + marginRight + paddingRight + marginLeft + paddingLeft,
        height: height - marginTop - paddingTop - marginBottom - paddingBottom + 139 + 12, // hardcoded for contact section
        // height: height - marginTop - paddingTop - marginBottom - paddingBottom, // hardcoded for contact section
        top: top + marginTop + paddingTop,
        left: left + marginLeft + paddingLeft,
        //commGridRef: commGridRef.current,
      })
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubscribeFormOpen, setIsSubscribeFormOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>({});

  const handleClick = (id: number) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(contents[id]);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({})
  }

  const openSubscribeForm = () => {
    setIsSubscribeFormOpen(true);
  }

  const closeSubscribeForm = () => {
    setIsSubscribeFormOpen(false);
  }

  return isMobile ? (
    <div>
      <div className={styles.community_grid}>
        {contents.map((content, contId) => (
          <CommunityCard content={content} key={contId} handleClick={handleClick} />
        ))}
      </div>
      <div className={styles.contactSection} onClick={openSubscribeForm}>
        <p>connect to the multiverse</p>
        <img src='./images/community/community_08.png' />
      </div>
      <div className={cx(isModalOpen ? styles.expanded_container : styles.hidden_container)}>
        <div className={cx(styles.inner_container)} style={commGridDimension} >
          <CommunityModal content={modalContent} closeModal={closeModal} />
        </div>
      </div>
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
        <div className={styles.contactSection} onClick={openSubscribeForm}>
          <p>connect to the multiverse</p>
          <img src='./images/community/community_08.png' />
        </div>
        <div className={cx(isModalOpen ? styles.expanded_container : styles.hidden_container)}>
          <div className={cx(styles.inner_container)} style={commGridDimension} >
            <CommunityModal content={modalContent} closeModal={closeModal} />
          </div>
        </div>
        <div className={cx(isSubscribeFormOpen ? styles.expanded_container : styles.hidden_container)}>
          <div className={cx(styles.inner_container)} style={commGridDimension} >
            <CommunitySubscribeForm closeModal={closeModal} />
          </div>
        </div>
      </div>
    );
}

export default CommunityGrid;


