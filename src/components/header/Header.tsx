/* eslint-disable @next/next/no-html-link-for-pages */
import Container from '../container/Container'
import styles from './header.module.scss'
import { themeChanger } from './helpers/themeChanger';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './components/NavDesktop';

const links = ['Community', 'Multiverse', 'Whitepaper', 'Roadmap', "InceptionNFT", "Play-Learn-Earn", 'Careers']

const Header = () => {

  const { theme } = themeChanger();

  return (
    <Container className={styles.headerContainer}>
      <header className={styles.header}>
        {
          theme != 'dark'
            ? (<a href="/"><img src='./images/rcm-logo-red.svg' alt='RCM Logo' className={styles.headerLogo} /></a>)
            : (<a href="/"><img src='./images/rcm-logo-white.svg' alt='RCM Logo' className={styles.headerLogo} /></a>)
        }
        <NavDesktop links={links} />
        <NavMobile links={links} />

      </header>
    </Container>
  )
}

export default Header;
