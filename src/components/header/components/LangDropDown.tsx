import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import OutSideClickHandler from 'react-outside-click-handler';
import { langItems } from './constants';
import styles from './LangDropDown.module.scss';

const LangDropDown = ({ isDarkPage }: any) => {
  const router = useRouter();
  const { pathname, asPath, query } = router
  const [activeIdx, setActiveIdx] = useState<number | null>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      if (router.locale) {
        const langIdx = langItems.indexOf(router.locale.toString());
        langIdx === -1 ? setActiveIdx(0) : setActiveIdx(langIdx);
      } else {
        setActiveIdx(0);
      }
    }
  }, [router.isReady, router.locale]);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleClickItem = (idx: any) => {
    setActiveIdx(idx);
    router.push({ pathname, query }, asPath, { locale: langItems[idx] })

    setIsOpen(false);
  }

  return (
    <OutSideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className={styles.langDropDownContainer}>
        <div className={styles.langDropDownWrapper}>
          {activeIdx !== undefined && activeIdx !== null &&
            <div className={`${styles.langDropDown} ${isDarkPage ? styles.darkPage : ''}`} onClick={handleClickMenu}>
              {langItems[activeIdx]}
            </div>
          }
          {isOpen && (
            <div className={`${styles.langDropDownPanel} ${isDarkPage ? styles.darkPage : ''}`}>
              {langItems.map((item: any, idx: any) => {
                if (idx === activeIdx) {
                  return <span className={styles.emptyItem} key={idx}></span>
                }
                return <div className={styles.langDropDownItem} key={idx} onClick={() => handleClickItem(idx)}>{langItems[idx]}</div>
              })}
            </div>
          )}
        </div>
      </div>
    </OutSideClickHandler>
  )
};

export default LangDropDown;
