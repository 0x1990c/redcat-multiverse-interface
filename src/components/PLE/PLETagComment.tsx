import styles from '../../styles/ple.module.scss';

const PLETagComment = ({ text }: any) => {
  return (<div className={styles.pleTagComment}>
    <div className={styles.pleTagCommentBox}>
      <svg width="435" height="253" viewBox="0 0 435 253" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter x="-2%" y="-3.4%" width="104%" height="104.6%" filterUnits="objectBoundingBox" id="v60u4zv1ra">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
            <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" in="shadowBlurOuter1" />
          </filter>
          <path d="M856 300h406.97a8 8 0 0 1 8 8v192.113a8 8 0 0 1-8 8H1012.8a5 5 0 0 0-3.23 1.183l-35.888 30.358a5 5 0 0 1-8.229-3.818v-9.723c0-9.94-8.059-18-18-18H856a8 8 0 0 1-8-8V308a8 8 0 0 1 8-8z" id="44br4ndtnb" />
        </defs>
        <g transform="matrix(-1 0 0 1 1276.97 -294)" fill="none" fillRule="evenodd">
          <use fill="#000" filter="url(#v60u4zv1ra)" xlinkHref="#44br4ndtnb" />
          <use stroke="#F9C930" strokeWidth="2" fill="#1B1628" xlinkHref="#44br4ndtnb" />
        </g>
      </svg>
      <p>{text}</p>
    </div>
    <img src="./images/tag_2x.png" alt="TAG" />
  </div>)
};

export default PLETagComment;
