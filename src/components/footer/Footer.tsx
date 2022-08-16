import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href='/careers'>
          <a>{t('header.careers')}</a>
        </Link>
        <div className={styles.separator}>&nbsp;|&nbsp;</div>
        <a className={styles.option} href='https://blog.redcatmultiverse.io/' target='_blank' rel="noreferrer">
          Blog
        </a>
      </div>
      <div className={styles.separator}>&nbsp;|&nbsp;</div>
      <div>&#9993;&nbsp;<a href='mailto:hello@rcmlabs.io'>hello@rcmlabs.io</a></div>
      <div className={styles.separator}>&nbsp;|&nbsp;</div>
      <div>©2022 RCM Labs.&nbsp;{t('footer.allRights')}</div>
    </footer>
  )
}

export default Footer;
