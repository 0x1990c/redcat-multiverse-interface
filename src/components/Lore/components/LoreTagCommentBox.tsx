import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const LoreTagCommentBox = ({ className }: any) => {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | any>('light');

  useEffect(() => {
    theme === "system" ? setCurrentTheme(systemTheme) : setCurrentTheme(theme);
  }, [setCurrentTheme, systemTheme, theme]);

  return (
    <div className={className}>
      <svg width="729" height="200" viewBox="0 0 729 200">
        <defs>
          <filter x="-1.2%" y="-4.5%" width="102.4%" height="107.3%" filterUnits="objectBoundingBox" id="q3o7wdebma">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
            <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" in="shadowBlurOuter1" />
          </filter>
          <path d="M326 599h700.5a8 8 0 0 1 8 8v126a8 8 0 0 1-8 8H503.225a5 5 0 0 0-2.2.51l-90.422 44.32a5 5 0 0 1-7.2-4.49V746a5 5 0 0 0-5-5H326a8 8 0 0 1-8-8V607a8 8 0 0 1 8-8z" id="l9wp37l6ob" />
        </defs>
        <g transform="translate(-312 -593)" fill="none" fillRule="evenodd">
          <use fill="#000" filter="url(#q3o7wdebma)" xlinkHref="#l9wp37l6ob" />
          <use stroke="#F9C930" strokeWidth="2" fillOpacity="0" fill={currentTheme === 'dark' ? "#1B1628" : "#FFF"} xlinkHref="#l9wp37l6ob" />
        </g>
      </svg>
    </div>
  );
};

export default LoreTagCommentBox;
