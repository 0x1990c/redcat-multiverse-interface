import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import styles from '../../styles/ple.module.scss';

const PLEDescriptionBox = ({ texts, onScrollAtBottom }: any) => {
  const boxRef: any = useRef(null);

  useEffect(() => {
    if (texts && texts.length > 0) {
      // window.scrollTo(0, boxRef.current.offsetTop);
      // boxRef.current.scrollIntoView();
      // boxRef.current.scrollTop = 0;
      boxRef.current.scroll({ top: 0, behavior: 'smooth' });
    }
  }, [texts]);

  const handleScroll = () => {
    if (boxRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = boxRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // boxRef.current.scrollIntoView();
        // boxRef.current.scrollTop = 0;
        // onScrollAtBottom();
      }
    }
  }

  return (
    <div className={styles.pleDescriptionWrapper}>
      <div className={styles.pleDescriptionBox} ref={boxRef} onScroll={() => handleScroll()}>
        {texts.map((text: any, idx: any) => (
          <p key={idx}>{parse(text)}</p>
        ))}
      </div>
    </div>
  )
};

export default PLEDescriptionBox;
