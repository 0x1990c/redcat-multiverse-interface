import cx from 'classnames';
import styles from "./CommunityGrid.module.scss"
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const CommunityCard = ({ content, contId, handleClick }: any) => {

  const { id, item, title, numeration, label, image } = content;

  return (
    <div className={cx(styles.community_card, styles[item])}
      onClick={() => handleClick(id)} key={contId}>
      <div className="leftcol">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.numeration}>{numeration}</div>
        <p className={styles.label}>{label}</p>
      </div>
      <img src={image} className={styles.cardImage} />
    </div>
  );
}

export default CommunityCard;