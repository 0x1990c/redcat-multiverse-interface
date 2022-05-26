import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import CommunityCard from './CommunityCard'
import CommunityModal from './CommunityModal'
import styles from './CommunityGrid.module.scss'
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { contents } from './constants';

const CommunityGrid = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [dimension, setDimension] = useState(0);

  const updateDimension = () => {
    setDimension(window.innerWidth);
    setIsMobile(dimension <= 1024);
  }

  useEffect(() => {
    updateDimension();
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);

  }, [dimension]);

  const commGridRef: any = useRef(null);
  const commCardExpRef = useRef(null);

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
        height: height - marginTop - paddingTop - marginBottom - paddingBottom,
        top: top + marginTop + paddingTop,
        left: left + marginLeft + paddingLeft,
        //commGridRef: commGridRef.current,
      })
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>({});

  const handleClick = (id: number) => {
    setIsModalOpen(!isModalOpen);
    // !isMobile && animateCard(commGridRef.current, commCardExpRef.current);
    setModalContent(contents[id]);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({})
    // !isMobile && animateCard(commCardExpRef.current, commGridRef.current);
  }

  const animateCard = (fromHero: any, toHero: any) => {
    var clone = fromHero.cloneNode(true);

    var from = calculatePosition(fromHero);
    var to = calculatePosition(toHero);

    gsap.set([fromHero, toHero], { visibility: "hidden" });
    gsap.set(clone, { position: "absolute", margin: 0 });

    fromHero && fromHero.appendChild(clone);

    var styleEnd = {
      x: 0, //-1000,//from.left - dimensions.width, //- from.left,
      y: 0, //-1000,//from.top - dimensions.height, //- from.top,
      //top: 0,//-(contExpTop - dimensions.top),
      //left: 0,//-(contExpLeft - dimensions.left),
      width: commGridDimension.width,
      height: commGridDimension.height,//dimensions.height,
      //autoRound: false,
      //rotation: 360, 
      delay: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: onComplete
    };

    // // capture state
    // const state = Flip.getState(fromHero, toHero);

    // // now do a "Flip" animation from the previous state to the new one:
    // Flip.from(state, {
    //   duration: 1,
    //   ease: "power1.inOut",
    //   absolute: true
    // });

    gsap.from(clone, styleEnd);

    function onComplete() {
      gsap.set(toHero, { visibility: "visible" });
      fromHero && fromHero.removeChild(clone);
    }
  }

  function calculatePosition(element: any) {

    var rect = element.getBoundingClientRect();

    var scrollTop = element.pageYOffset || 0;
    var scrollLeft = element.pageXOffset || 0;
    var clientTop = element.clientTop || 0;
    var clientLeft = element.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
      height: rect.height,
      width: rect.width,
    };
  }

  return isMobile ? (
    <div>
      <div className={styles.community_grid}>
        {contents.map((content, contId) => (
          <CommunityCard content={content} key={contId}
            dimensions={commGridDimension} handleClick={handleClick} />
        ))}
      </div>
      <div className={cx(isModalOpen ? styles.expanded_container : styles.hidden_container)} ref={commCardExpRef}>
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
                  <CommunityCard content={content} key={contId} dimensions={commGridDimension} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
          <div className={styles.column}>
            {contents.map((content, contId) => {
              if (content.column === "column_2") {
                return (
                  <CommunityCard content={content} key={contId} dimensions={commGridDimension} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
          <div className={styles.column}>
            {contents.map((content, contId) => {
              if (content.column === "column_3") {
                return (
                  <CommunityCard content={content} key={contId} dimensions={commGridDimension} handleClick={handleClick} />
                );
              }
            }
            )}
          </div>
        </div>
        <div className={cx(isModalOpen ? styles.expanded_container : styles.hidden_container)} ref={commCardExpRef}>
          <div className={cx(styles.inner_container)} style={commGridDimension} >
            <CommunityModal content={modalContent} closeModal={closeModal} />
          </div>
        </div>
      </div>
    );
}

export default CommunityGrid;


