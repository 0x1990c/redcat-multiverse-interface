import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LoreTagCommentBox from "./LoreTagCommentBox";
import { LORE_HERO_COMMENT } from "../constants";
import styles from "./TagComment.module.scss";

const TagComment = ({ className }: any) => {
  const { theme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | any>('light');

  useEffect(() => {
    theme === "system" ? setCurrentTheme(systemTheme) : setCurrentTheme(theme);
  }, [setCurrentTheme, systemTheme, theme]);

  return (
    <div className={`${className} ${styles.commentContainer}`}>
      <img src='./images/tag-2-left.png' className={styles.commentTag} />
      <div className={styles.commentContentContainer}>
        <LoreTagCommentBox className={styles.commentContentBoxDesktop} />
        <div className={styles.commentContentBoxMB}>
          <img src={currentTheme === 'dark' ? "./images/lore_comment_dark.png" : "./images/lore_comment_white.png"} />
        </div>
        <div className={styles.commentContentText}>{LORE_HERO_COMMENT}</div>
      </div>
    </div>
  );
};

export default TagComment;
