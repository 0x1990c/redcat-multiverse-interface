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
        <p className={styles.commentContentText}>{LORE_HERO_COMMENT}</p>
        <img
          className={styles.commentContentBoxDesktop}
          src={currentTheme === 'dark' ? "./images/lore_comment_dp_dark.png" : "./images/lore_comment_dp.png"}
        />
        <img
          className={styles.commentContentBoxMB}
          src={currentTheme === 'dark' ? "./images/lore_comment_dark.png" : "./images/lore_comment_white.png"}
        />
      </div>
    </div>
  );
};

export default TagComment;
