import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <Link href="/">
          <a>
            <img src='/images/rcm_base_logo.png' alt='RCM Logo' className={styles.footerLogo} />
          </a>
        </Link>
      </div>
      <div className={styles.footerRow}>
        <a className={styles.option} href='https://blog.redcatmultiverse.io/' target='_blank' rel="noreferrer">
          Blog
        </a>
        <div className={styles.separator}>&nbsp;|&nbsp;</div>
        <Link href={`/careers`}>
          <a>
            Careers
          </a>
        </Link>
      </div>
      <div className={`${styles.footerRow} ${styles.rcmInfo}`}>
        <div>&#9993;&nbsp;<a href='mailto:hello@rcmlabs.io'>hello@rcmlabs.io</a></div>
        <div className={styles.separator}>&nbsp;|&nbsp;</div>
        <div>© 2022 RCM Labs. All rights reserved.</div>
      </div>

    </footer>
  )
}

export default Footer;
