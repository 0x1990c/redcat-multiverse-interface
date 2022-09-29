import { useState, useEffect, useRef } from 'react'
import cx from 'classnames';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import styles from './RoadmapTimeline.module.scss'
import useDimensions from '../../utilities/useDimension'



const RoadmapTimeline = () => {
  const { t } = useTranslation('roadmapPage');

  const [isMobile, vpWidth] = useDimensions(1300);

  const [roadMapDimension, setRoadMapDimension] = useState({});
  const roadMapCont = useRef(null);
  const btnStart = useRef(null);
  const btnEnd = useRef(null);

  const contents = [
    {
      id: '0',
      title: t('contents.id_0.title'),
      bullets: [
        t('contents.id_0.bullets.id_0'),
        t('contents.id_0.bullets.id_1'),
        t('contents.id_0.bullets.id_2'),
        t('contents.id_0.bullets.id_3')
      ],
      buttonLabel: t('done'),
      status: 'done',
      period: t('contents.id_0.period'),
      alignment: 'left',
    },
    {
      id: '1',
      title: t('contents.id_1.title'),
      bullets: [
        t('contents.id_1.bullets.id_0'),
        t('contents.id_1.bullets.id_1'),
        t('contents.id_1.bullets.id_2')
      ],
      buttonLabel: t('done'),
      status: 'done',
      period: t('contents.id_1.period'),
      alignment: 'right',
    },
    {
      id: '2',
      title: t('contents.id_2.title'),
      bullets: [
        t('contents.id_2.bullets.id_0'),
        t('contents.id_2.bullets.id_1')
      ],
      buttonLabel: t('done'),
      status: 'done',
      period: t('contents.id_2.period'),
      alignment: 'left',
    },
    {
      id: '3',
      title: t('contents.id_3.title'),
      bullets: [
        t('contents.id_3.bullets.id_0'),
        t('contents.id_3.bullets.id_1'),
        t('contents.id_3.bullets.id_2'),
        t('contents.id_3.bullets.id_3')
      ],
      buttonLabel: t('upcoming'),
      status: 'upcoming',
      period: t('contents.id_3.period'),
      alignment: 'right',
    },
    {
      id: '4',
      title: t('contents.id_4.title'),
      bullets: [
        t('contents.id_4.bullets.id_0'),
        t('contents.id_4.bullets.id_1'),
        t('contents.id_4.bullets.id_2')
      ],
      buttonLabel: t('future'),
      status: 'future',
      period: t('contents.id_4.period'),
      alignment: 'left',
    },
    {
      id: '5',
      title: t('contents.id_5.title'),
      bullets: [
        t('contents.id_5.bullets.id_0'),
        t('contents.id_5.bullets.id_1'),
        t('contents.id_5.bullets.id_2'),
        t('contents.id_5.bullets.id_3'),
        t('contents.id_5.bullets.id_4'),
        t('contents.id_5.bullets.id_5'),
        t('contents.id_5.bullets.id_6'),
        t('contents.id_5.bullets.id_7'),
        t('contents.id_5.bullets.id_8')
      ],
      buttonLabel: t('future'),
      status: 'future',
      period: t('contents.id_5.period'),
      alignment: 'right',
    },
  ];

  const btnReference = (id) => {
    const lastId = contents.length - 1;
    return (
      id === '0'
        ? btnStart
        : id === lastId.toString()
          ? btnEnd
          : null
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
            className={cx(styles[content.status], styles.general_mobile)}
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
          {t('extendedBtn')}
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
              className={cx(styles[content.status], styles.general)}
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
            {t('extendedBtn')}
          </a>
        </div>
      </div>
    );
}

export default RoadmapTimeline;