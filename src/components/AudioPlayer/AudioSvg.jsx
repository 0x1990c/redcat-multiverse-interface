import * as React from "react";
import styles from './AudioPlayer.module.scss';

export const MuteSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><circle cx="36" cy="36" r="36" /><g><g><path style={{ fill: "#fff" }} d="M51.38,22.61c-1.7-1.93-3.77-3.55-6.09-4.73-.65-.33-1.18,0-1.18,.73h0c0,.81,.56,1.81,1.25,2.23,2.46,1.51,4.53,3.6,6.02,6.06,1.63,2.7,2.56,5.87,2.56,9.24s-.94,6.54-2.56,9.24c-1.64,2.71-3.97,4.96-6.76,6.49-.58,.32-.86,1.03-.59,1.64,.3,.69,1.12,.99,1.76,.64,2.12-1.16,4.02-2.68,5.6-4.48,3.19-3.61,5.13-8.36,5.13-13.53s-1.93-9.92-5.13-13.53Z" /><path style={{ fill: "#fff" }} d="M39.84,36.14c0-1.67-1.07-3.08-2.56-3.61v-14.03c0-.63-.74-.98-1.23-.58l-12.87,10.53h-6.25c-.8,0-1.44,.65-1.44,1.44v12.49c0,.8,.65,1.44,1.44,1.44h6.25l12.87,10.53c.49,.4,1.23,.05,1.23-.58v-14.03c1.49-.53,2.56-1.94,2.56-3.61Z" /><path style={{ fill: "#fff" }} d="M46.25,36.14c0-4.09-2.41-7.62-5.88-9.26-.57-.27-1.26-.06-1.59,.48l-.05,.08c-.4,.65-.15,1.43,.54,1.75,2.6,1.23,4.41,3.89,4.41,6.95s-1.79,5.7-4.37,6.94c-.68,.32-.97,1.13-.58,1.78l.04,.07c.33,.54,1.02,.75,1.59,.48,3.47-1.64,5.88-5.18,5.88-9.26Z" /><path style={{ fill: "#fff" }} d="M51.38,36.14c0-5.9-3.32-11.02-8.2-13.6-.62-.33-1.38-.14-1.74,.46h0c-.39,.63-.16,1.46,.5,1.8,4.08,2.14,6.87,6.42,6.87,11.34s-2.79,9.2-6.87,11.34c-.66,.35-.89,1.17-.5,1.81,.36,.59,1.14,.77,1.75,.44,4.87-2.59,8.19-7.71,8.19-13.6Z" /></g><g><rect x="11.27" y="34.86" width="49.29" height="6.47" transform="translate(37.46 -14.24) rotate(45)" /><rect style={{ fill: "#fff" }} x="11.27" y="36.38" width="49.29" height="3.45" transform="translate(37.46 -14.24) rotate(45)" /></g></g></svg>
  );
}

export const PlaySvg = () => {
  return (
    <svg viewBox="0 0 80 80">
      <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1" >
        <stop offset="0%" stopColor="black" stopOpacity="0.4" />
        <stop offset="50%" stopColor="black" stopOpacity="0.8" />
        <stop offset="100%" stopColor="black" stopOpacity="1" />
      </linearGradient>

      <rect width="100%" height="100%" fill="url(#Gradient1)" />
      <rect x="13" y="19" width="5" height="20" fill="white" />
      <rect className={styles.animateMoveUp} x="13" y="15" width="5" height="5" fill="white" />
      <rect x="19" y="25" width="5" height="14" fill="white" />
      <rect className={styles.animateMoveUp} x="19" y="21" width="5" height="5" fill="white" />
      <rect x="25" y="29" width="5" height="10" fill="white" />
      <rect className={styles.animateMoveDown} x="25" y="25" width="5" height="5" fill="white" />
      <rect x="31" y="29" width="5" height="10" fill="white" />
      <rect className={styles.animateMoveUp} x="31" y="25" width="5" height="5" fill="white" />
      <rect x="37" y="24" width="5" height="15" fill="white" />
      <rect className={styles.animateMoveUp} x="37" y="20" width="5" height="5" fill="white" />
      <rect x="43" y="24" width="5" height="15" fill="white" />
      <rect className={styles.animateMoveDown} x="43" y="20" width="5" height="5" fill="white" />
      <rect x="49" y="31" width="5" height="8" fill="white" />
      <rect className={styles.animateMoveDown} x="49" y="27" width="5" height="5" fill="white" />
      <rect x="55" y="25" width="5" height="14" fill="white" />
      <rect className={styles.animateMoveDown} x="55" y="21" width="5" height="5" fill="white" />
      <rect x="61" y="21" width="5" height="18" fill="white" />
      <rect className={styles.animateMoveUp} x="61" y="17" width="5" height="5" fill="white" />
      <rect x="13" y="40" width="5" height="20" fill="#494948" />
      <rect className={styles.animateMoveUp} x="13" y="59" width="5" height="5" fill="#494948" />
      <rect x="19" y="40" width="5" height="14" fill="#494948" />
      <rect className={styles.animateMoveUp} x="19" y="53" width="5" height="5" fill="#494948" />
      <rect x="25" y="40" width="5" height="10" fill="#494948" />
      <rect className={styles.animateMoveDown} x="25" y="49" width="5" height="5" fill="#494948" />
      <rect x="31" y="40" width="5" height="10" fill="#494948" />
      <rect className={styles.animateMoveUp} x="31" y="49" width="5" height="5" fill="#494948" />
      <rect x="37" y="40" width="5" height="15" fill="#494948" />
      <rect className={styles.animateMoveUp} x="37" y="54" width="5" height="5" fill="#494948" />
      <rect x="43" y="40" width="5" height="15" fill="#494948" />
      <rect className={styles.animateMoveDown} x="43" y="54" width="5" height="5" fill="#494948" />
      <rect x="49" y="40" width="5" height="8" fill="#494948" />
      <rect className={styles.animateMoveDown} x="49" y="47" width="5" height="5" fill="#494948" />
      <rect x="55" y="40" width="5" height="14" fill="#494948" />
      <rect className={styles.animateMoveDown} x="55" y="53" width="5" height="5" fill="#494948" />
      <rect x="61" y="40" width="5" height="18" fill="#494948" />
      <rect className={styles.animateMoveUp} x="61" y="57" width="5" height="5" fill="#494948" />
    </svg>
  );
}