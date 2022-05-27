import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import CommunityCard from './CommunityCard'
import CommunityModal from './CommunityModal'
import styles from './CommunityGrid.module.scss'
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";

const contents = [
  {
    id: '0',
    title: "UPDATES",
    numeration: "01",
    label: "Keep up on the latest in the Red Cat MUltiverse",
    column: "column_1",
    column_m: "column_1",
    item: 'item_a',
    text: "",
  },
  {
    id: '1',
    title: "WHITEPAPER",
    numeration: "07",
    label: "Want to know more about what we’re doing?",
    column: "column_1",
    column_m: "column_1",
    item: 'item_b',
    text: ["It all started with one question: What if we could harness the engagement potential of blockchain gaming, but also encourage people to learn skills that go beyond playing games and make them more employable?", "In the Summer of 2021, we merged our 2019 research findings on soft skills with blockchain gaming and this is how the RedCat Multiverse was born with the world’s first Play-Learn-Earn model.", "RedCat Multiverse is a highly engaging blockchain game that provides socio - emotional activities, building skill mastery and expanding relationships.", "Our vision for RedCat Multiverse is that all citizens will  learn about themselves, others, patterns, motives, metaphors, motifs, relationships, skills, science, math, art, history, coding, languages, technology all inside a storytelling engine."],
  },
  {
    id: '2',
    title: "RCM LABS",
    numeration: "02",
    label: "It all started with one question: What if we could harness the engagement potential of blockchain gaming, but also encourage people to learn skills that go beyond playing games and make them more employable?",
    column: "column_2",
    column_m: "column_2",
    item: 'item_c',
    text: [
      `It all started with one question: What if we could harness the engagement potential of blockchain gaming, but also encourage people to learn skills that go beyond playing games and make them more employable?`,
      `In the Summer of 2021, we merged our 2019 research findings on soft skills with blockchain gaming and this is how the RedCat Multiverse was born with the world’s first Play- Learn - Earn model.`,
      `RedCat Multiverse is a highly engaging blockchain game that provides socio - emotional activities, building skill mastery and expanding relationships.`,
      `
      Our vision for RedCat Multiverse is that all citizens will  learn about themselves, others, patterns, motives, metaphors, motifs, relationships, skills, science, math, art, history, coding, languages, technology all inside a storytelling engine.
      `
    ],
  },
  {
    id: '3',
    title: "PRESS",
    numeration: "06",
    label: "The Red Cat Multiverse is in the media!",
    column: "column_2",
    column_m: "column_2",
    item: 'item_d',
    text: ['The Red Cat Multiverse is in the media!'],
  },
  {
    id: '4',
    title: "MANIFESTO",
    numeration: "03",
    label: "Let's learn, grow, and dream…together!",
    column: "column_3",
    column_m: "column_1",
    item: 'item_e',
    text: [
      'A brand new journey starts…',
      'Here’s to the curious ones, those who love challenges, the inquisitive early adopters, with a never ending desire to empower the huma race…',
      'Here’s to the crazy ones, those who think and feel beyond the present moment, the outliers who see things differently…',
      'Here’s to the game changers who, as Steve Jobs said, “stay hungry, stay foolish…”',
      'Meet Sanura, the RedCat.Together, you will tear down antiquated walls, and reimagine a better future!',
      'Together, we can build more immersive experiences!',
      'Let’s learn, grow, and dream…together!',
    ],
  },
  {
    id: '5',
    title: "RCM INSIDERS",
    numeration: "04",
    label: "Help build the multiverse with us!",
    column: "column_3",
    column_m: "column_1",
    item: 'item_f',
    text: [`MEERKAT BAG NFTS`,
      `
            Inspired by the Loot project, Meerkat Bag NFTs are utility NFTs which provide building block primitives, upon which a foundational asset class can be built within the RedCat Multiverse.Meerkat Bags provide an opportunity to start with the content, before moving to gameplay, which in turn creates a purpose- driven community, rather than a product.Meerkat Bags are a collection of 888 NFTs, which have a unique combination of four character traits such as power skills, positive personality traits, even personality traits, and quirky traits.`
      ,
      `
            Meerkat Bags essentially provide a prompt or building block primitive - upon which a foundational Multiverse asset Genius can be built.Meerkat Bags are exclusively created for hyper social RedCat Multiverse community members. 
            `,
      `RCM FELLOWS`,
      `
              We are also building tools to bridge the gap between the real world as well as existing Web 2.0 platforms like YouTube and Web 3.0 platforms.RCM Insiders who substantially contribute to multiverse development will become eligible to be RCM Fellows, important members who will be responsible for shaping this engagement and potentially get compensated for their contribution.,
          `]
  },
  {
    id: '6',
    title: "TEAM",
    numeration: "05",
    label: "Here’s our team of the curious and crazy game changers.",
    column: "column_3",
    column_m: "column_2",
    item: 'item_g',
    text: "",
  },
];


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
    setModalContent(contents[id]);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({})
  }

  return isMobile ? (
    <div>
      <div className={styles.community_grid}>
        {contents.map((content, contId) => (
          <CommunityCard content={content} key={contId} handleClick={handleClick} />
        ))}
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
        <div className={cx(isModalOpen ? styles.expanded_container : styles.hidden_container)}>
          <div className={cx(styles.inner_container)} style={commGridDimension} >
            <CommunityModal content={modalContent} closeModal={closeModal} />
          </div>
        </div>
      </div>
    );
}

export default CommunityGrid;


