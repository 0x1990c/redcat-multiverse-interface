import cx from 'classnames';
import styles from "./CommunityGrid.module.scss"
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const CommunityCard = ({ content, contId, dimensions, handleClick }: any) => {

  const { id, item, title, numeration, label } = content;

  return (
    <div className={cx(styles.community_card, styles[item])}
      onClick={() => handleClick(id)} key={contId}>
      <div className="leftcol">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.numeration}>{numeration}</div>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
}

export default CommunityCard;