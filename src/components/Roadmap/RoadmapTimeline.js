import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import parse from 'html-react-parser';
import { title } from 'process';
import styles from './RoadmapTimeline.module.scss'
import useDimensions from '../../utilities/useDimension'

const contents = [
  {
    id: '0',
    title: 'The Red Cat Arrives',
    bullets: [
      'Pre-production started',
      'Core design completed',
      'Meerkat Bag NFT Collection Sale',
      'RedCat Multiverse community begins'
    ],
    buttonLabel: 'Done',
    period: 'Q4 2021 & Q1 2022',
    alignment: 'left',
  },
  {
    id: '1',
    title: 'First Looks',
    bullets: [
      'Pre-seed funding finalized',
      'RedCat Multiverse game simulator built in-house',
      'RedCat Multiverse White Paper published'
    ],
    buttonLabel: 'Done',
    period: 'Q2 2022',
    alignment: 'right',
  },
  {
    id: '2',
    title: 'The Gifted Operatives Arrive',
    bullets: [
      'RedCat Multiverse trailer/video',
      'Inception NFT collection announced',
      'Inception NFT Collection Sale'
    ],
    buttonLabel: 'Upcoming',
    period: 'Q3 2022',
    alignment: 'left',
  },
  {
    id: '3',
    title: 'RedCat Multiverse Orientation',
    bullets: [
      'Closed Beta release <span style="color: #e83324;">(Initially for Inception NFT Holders and select RCM Insiders)</span>',
      'Accretion NFT Collection Sale <span style="color: #7192f3;">(open to public)</span>',
      'RedCat Multiverse Tokenomics published'
    ],
    buttonLabel: 'Future',
    period: 'Q3 2022',
    alignment: 'right',
  },
  {
    id: '4',
    title: 'The RedCat Multiverse Opens',
    bullets: ['Conception NFT Collection Sale', 'Governance Token Sale', 'Public Beta release'],
    buttonLabel: 'Future',
    period: 'Q4 2022',
    alignment: 'left',
  },
  {
    id: '5',
    title: 'New Era of Smart Fun Expands',
    bullets: [
      'Live design balance updates',
      'New campaigns & more power skills',
      'New Figment NFTs(characters)',
      'Introduction of DAOs',
      'Introduction of DEFI Liquidity Pools',
      'Visual upgrades with more universes',
      'Land in the Convergence & PVE game mode',
      '3rd party and community content',
      'Introduction of DAOs',
      'Open metaverse'
    ],
    buttonLabel: 'Future',
    period: '2023 & Beyond',
    alignment: 'right',
  },
];

const RoadmapTimeline = () => {

  const [isMobile, vpWidth] = useDimensions(1300);

  const [roadMapDimension, setRoadMapDimension] = useState({});
  const roadMapCont = useRef(null);
  const btnStart = useRef(null);
  const btnEnd = useRef(null);

  const btnReference = (id) => {
    const lastId = contents.length - 1;
    return (
      id === '0' ? btnStart
        :
        id === lastId.toString() ? btnEnd
          :
          null
    );
  }

  useEffect(() => {
    const top = btnStart.current.offsetTop;
    const left = btnStart.current.offsetLeft;
    const heightStart = btnStart.current.offsetHeight;
    const width = btnStart.current.offsetWidth;
    const bottom = btnEnd.current.offsetTop;
    const heightEnd = btnEnd.current.offsetHeight;

    setRoadMapDimension({
      top: top + heightStart,
      left: left + width / 2 - 7.5,
      bottom: bottom - heightEnd,
      height: bottom - heightEnd - top,
    });
  }, [vpWidth, roadMapDimension.left]);

  return isMobile ? (
    <div className={cx(styles.roadmap_container)}>
      <div
        className={cx(styles.vertical_lines)}
        style={{
          top: roadMapDimension.top,
          left: roadMapDimension.left,
          height: roadMapDimension.height,
        }}>
        <div className={cx(styles.rcm_dark_blue)}></div>
        <div className={cx(styles.rcm_yellow)}></div>
        <div className={cx(styles.rcm_red)}></div>
        <div className={cx(styles.rcm_orange)}></div>
        <div className={cx(styles.rcm_light_blue)}></div>
      </div>
      <div ref={roadMapCont}>
        {contents.map((content, contId) => (
          <div
            className={
              cx(styles[content.buttonLabel.toLowerCase()],
                styles.general_mobile)}
            key={contId}>
            <div>
              <div
                className={cx(styles.state_btn_general, styles.state_button)}
                ref={btnReference(content.id)}>
                {content.buttonLabel}
              </div>
            </div>
            <div className={cx(styles.period_container_mobile_general)}>
              <div>
                <div className={cx(styles.period_general)}>
                  {content.period}
                </div>
              </div>
              <div className={cx(styles.container_corner)}>
                <div className={cx(styles.container_general, styles.container)}>
                  <div className={cx(styles.title_general, styles.title)} >
                    {content.title}
                  </div>
                  <div className={cx(styles.bullets_general, styles.bullets)}>
                    <ul className={cx(styles.bullet_list_general)}>
                      {content.bullets.map((bullet, bullId) => (
                        <li key={bullId}>{parse(bullet)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={cx(styles.corner_general, styles.container, styles.corner)}>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.extendedBtnContainer}>
        <a className={styles.extendedBtn} href='https://whitepaper.redcatmultiverse.io/roadmap-for-redcat-multiverse' target='_blank' rel="noreferrer">
          For extended RCM Labs road map, please click here
        </a>
      </div>
    </div>
  )
    :
    (
      <div className={cx(styles.roadmap_container)}>
        <div
          className={cx(styles.vertical_lines)}
          style={{
            top: roadMapDimension.top,
            left: roadMapDimension.left,
            height: roadMapDimension.height,
          }}>
          <div className={cx(styles.rcm_dark_blue)}></div>
          <div className={cx(styles.rcm_yellow)}></div>
          <div className={cx(styles.rcm_red)}></div>
          <div className={cx(styles.rcm_orange)}></div>
          <div className={cx(styles.rcm_light_blue)}></div>
        </div>
        <div ref={roadMapCont}>
          {contents.map((content, contId) => (
            <div
              className={
                cx(styles[content.buttonLabel.toLowerCase()],
                  styles.general)}
              key={contId}>
              <div className={cx(styles.container_corner)}>
                <div className={cx(styles.container_general, styles.container)}>
                  <div className={cx(styles.title_general, styles.title)} >
                    {content.title}
                  </div>
                  <div className={cx(styles.bullets_general, styles.bullets)}>
                    <ul className={cx(styles.bullet_list_general)}>
                      {content.bullets.map((bullet, bullId) => (
                        <li key={bullId}>{parse(bullet)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={cx(styles.corner_general, styles.container, styles.corner)}>
                </div>
              </div>
              <div>
                <div
                  className={cx(styles.state_btn_general, styles.state_button)}
                  ref={btnReference(content.id)}>
                  {content.buttonLabel}
                </div>
              </div>
              <div>
                <div className={cx(styles.period_general)}>
                  {content.period}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.extendedBtnContainer}>
          <a
            className={styles.extendedBtn}
            href='https://whitepaper.redcatmultiverse.io/roadmap-for-redcat-multiverse'
            target='_blank'
            rel="noreferrer"
          >
            For extended RCM Labs road map, please click here
          </a>
        </div>
      </div>
    );
}

export default RoadmapTimeline;