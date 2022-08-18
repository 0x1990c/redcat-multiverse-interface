import cx from 'classnames';
import { useTheme } from 'next-themes';
import { useTranslation } from 'next-i18next';
import { useScreenWidth } from '../../hooks/useScreenCheck';
import ChevronArrowRight from '../Icons/ChevronArrowRight';
import styles from "./CommunityGrid.module.scss"
import { gsap, Power1 } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const CommunityCard = ({ content, contId, handleClick }: any) => {
  const { t } = useTranslation('communityPage');

  const { id, item, title, numeration, label, image } = content;
  const { isMobile } = useScreenWidth();
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className={cx(styles.community_card, styles[item])}
      onClick={() => handleClick(id)} key={contId}>
      <img src={image} className={styles.cardImage} />
      <div className="leftcol">
        <h3 className={styles.title}>{t(`contents.id_${id}.title`)}</h3>
        <div className={styles.numeration}>
          <div>{numeration}</div>
          {!isMobile && (
            <div className={styles.numberArrowIcon}>
              <ChevronArrowRight color={currentTheme === 'dark' && item === 'item_f' ? '#1b1628' : '#fff'} />
            </div>
          )}

        </div>
        <p className={styles.label}>{item === 'item_g'
          ? (<strong style={{ fontSize: '28px' }}>{t(`contents.id_${id}.label`)}</strong>)
          : t(`contents.id_${id}.label`)
        }</p>
      </div>

    </div>
  );
}

export default CommunityCard;
