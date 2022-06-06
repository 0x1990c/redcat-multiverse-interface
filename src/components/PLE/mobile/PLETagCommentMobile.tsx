import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from '../../../styles/ple.module.scss';

const PLETagCommentMobile = ({ text }: any) => {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | any>('light');

  useEffect(() => {
    theme === "system" ? setCurrentTheme(systemTheme) : setCurrentTheme(theme);
  }, [setCurrentTheme, systemTheme, theme]);

  return (<div className={styles.pleTagCommentMobile}>
    <div className={styles.pleTagCommentBoxMobile}>
      <svg width="329" height="258" viewBox="0 0 329 258" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter x="-2.7%" y="-3.4%" width="105.4%" height="105.6%" filterUnits="objectBoundingBox" id="s9ufl84j0a">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
            <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" in="shadowBlurOuter1" />
          </filter>
          <path d="M8 0h301a8 8 0 0 1 8 8v184.312a8 8 0 0 1-8 8H184.571a5 5 0 0 0-2.206.513l-90.06 44.293a5 5 0 0 1-7.207-4.487v-35.32a5 5 0 0 0-5-5H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z" id="rdsrutumrb" />
        </defs>
        <g transform="matrix(-1 0 0 1 323 6)" fill="none" fillRule="evenodd">
          <use fill="#000" filter="url(#s9ufl84j0a)" xlinkHref="#rdsrutumrb" />
          <use stroke="#F9C930" strokeWidth="2" fill={currentTheme === 'dark' ? '#1B1628' : '#FFF'} xlinkHref="#rdsrutumrb" />
        </g>
      </svg>
      <p>{text}</p>
    </div>
    <img src="./images/tag.png" alt="TAG" />
  </div>)
};

export default PLETagCommentMobile;
