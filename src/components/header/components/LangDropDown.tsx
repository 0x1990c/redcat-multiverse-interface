import { useState } from "react";
import { useRouter } from 'next/router';

const langItems = [
  'en', 'jp'
]
const LangDropDown = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClickMenu = () => {

  }

  const handleClickItem = (idx: any) => {
    setActiveIdx(idx);
    // router.locale = langItems[idx];
    console.log('router.locale ==>', router.locale);
    router.push({ pathname, query }, asPath, { locale: langItems[idx] })

  }

  return (
    <div>
      <div onClick={handleClickMenu}>{langItems[activeIdx]}</div>
      <div>
        {langItems.map((item: any, idx: any) => {
          if (idx === activeIdx) {
            return <></>
          }
          return <div key={idx} onClick={() => handleClickItem(idx)}>{langItems[idx]}</div>
        })}
      </div>
    </div>
  )
};

export default LangDropDown;
