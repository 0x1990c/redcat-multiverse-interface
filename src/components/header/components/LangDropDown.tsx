import { useState } from "react";
import { useRouter } from 'next/router';
import styles from './LangDropDown.module.scss';

const langItems = [
  'en', 'jp'
]
const LangDropDown = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleClickItem = (idx: any) => {
    setActiveIdx(idx);
    // router.locale = langItems[idx];
    console.log('router.locale ==>', router.locale);
    router.push({ pathname, query }, asPath, { locale: langItems[idx] })

  }

  return (
    <div className={styles.langDropDownContainer}>
      <div className={styles.langDropDown} onClick={handleClickMenu}>{langItems[activeIdx]}</div>
      {isOpen && (
        <div>
          {langItems.map((item: any, idx: any) => {
            if (idx === activeIdx) {
              return <></>
            }
            return <div key={idx} onClick={() => handleClickItem(idx)}>{langItems[idx]}</div>
          })}
        </div>
      )}
    </div>
  )
};

export default LangDropDown;
