import { useTranslation } from 'next-i18next';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div>&#9993;&nbsp;<a href='mailto:hello@rcmlabs.io'>hello@rcmlabs.io</a></div>
      <div className={styles.separator}>&nbsp;|&nbsp;</div>
      <div>© 2022 RCM Labs.&nbsp;{t('footer.allRights')}</div>
    </footer>
  )
}

export default Footer;
