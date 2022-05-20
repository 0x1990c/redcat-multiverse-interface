import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import styles from "./CommunityGrid.module.scss"
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const CommunityCard = ({ content, contId, dimensions }: any) => {

  const { item, title, numeration, text } = content;
  const { commGridRef } = dimensions;

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [newDimensions, setNewDimensions] = useState({});

  //setting references to card and card extended containers and getting top and left positions
  const commCardRef: any = useRef(null);
  const commCardExpRef: any = useRef(null);

  const [contExpTop, setcontExpTop] = useState(0);
  const [contExpLeft, setcontExpLeft] = useState(0);
  const [contExpWidth, setcontExpWidth] = useState(0);
  const [contExpHeight, setcontExpHeight] = useState(0);

  useEffect(() => {
    if (commCardRef) {
      setcontExpTop(commCardRef.current.offsetTop);
      setcontExpLeft(commCardRef.current.offsetLeft);
      setcontExpWidth(commCardRef.current.offsetWidth);
      setcontExpHeight(commCardRef.current.offsetHeight);
    }
  }, []);


  const openModal = () => {
    if (dimensions) {
      const openedDimensions = {
        width: dimensions.width.toString() + 'px',
        height: dimensions.height.toString() + 'px',
        top: -(contExpTop - dimensions.top).toString() + 'px',
        left: -(contExpLeft - dimensions.left).toString() + 'px',
        zIndex: '1000',
        backgroundColor: '#F4DB33',
        //visibility: 'visible',
        //position: 'absolute',
      }
      setIsModalOpened(true);
      setNewDimensions(openedDimensions);
      animateCard(commCardRef.current, commCardExpRef.current);
    }
  }

  const closeModal = () => {
    setNewDimensions({});
    setIsModalOpened(false);
    animateCard(commCardExpRef.current, commCardRef.current);
  }


  const animateCard = (fromHero: any, toHero: any) => {
    var clone = fromHero.cloneNode(true);

    var from = calculatePosition(fromHero);
    var to = calculatePosition(toHero);

    gsap.set([fromHero, toHero], { visibility: "hidden" });
    gsap.set(clone, { position: "absolute", margin: 0 });

    commCardRef && commCardRef.current.appendChild(clone);

    var styleIni = {
      x: 0,//from.left - dimensions.width, //- from.left,
      y: 0,//from.top - dimensions.height, //- from.top,
      top: 0,//-(contExpTop - dimensions.top),
      left: 0,//-(contExpLeft - dimensions.left),
      width: contExpWidth,
      height: contExpHeight,//dimensions.height,
    };

    var styleEnd = {
      x: -1000,//from.left - dimensions.width, //- from.left,
      y: -1000,//from.top - dimensions.height, //- from.top,
      top: 0,//-(contExpTop - dimensions.top),
      left: 0,//-(contExpLeft - dimensions.left),
      width: dimensions.width,
      height: 1000,//dimensions.height,
      //autoRound: false,
      //rotation: 360, 
      delay: 0,
      duration: 1,
      ease: "power1.out",
      onComplete: onComplete
    };

    //console.log(style);
    //const state = Flip.getState(fromHero);
    // gsap.set(clone, from);
    gsap.fromTo(clone, styleIni, styleEnd);
    //Flip.from(state, style);

    function onComplete() {
      gsap.set(toHero, { visibility: "visible" });
      commCardRef && commCardRef.current.removeChild(clone);
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

  return (
    <div className={cx(styles.community_card, styles[item])}
      onClick={() => isModalOpened ? closeModal() : openModal()}
      key={contId}
      ref={commCardRef}>
      <div className="leftcol">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.numeration}>{numeration}</div>
        <p className={styles.text}>{text}</p>
      </div>
      <div className="rightcol">
        <a>
          X
        </a>
      </div>
      <div className={cx(styles.expanded_container)} ref={commCardExpRef}>
        <div className={cx(styles.inner_container)} style={newDimensions}>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;