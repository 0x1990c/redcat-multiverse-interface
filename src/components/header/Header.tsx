/* eslint-disable @next/next/no-html-link-for-pages */
import Container from '../container/Container'
import styles from './header.module.scss'
import { themeChanger } from './helpers/themeChanger';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './components/NavDesktop';

const links = ['Community', 'Multiverse', 'Whitepaper', 'Roadmap', "InceptionNFT", "Play-Learn-Earn", 'Careers', 'Connect']

const headerLinks = [
  { name: 'Community', link: 'community', finished: true },
  { name: 'Multiverse', link: 'multiverse', finished: false },
  { name: 'Whitepaper', link: 'whitepaper', finished: true },
  { name: 'Roadmap', link: 'roadmap', finished: true },
  { name: 'InceptionNFT', link: 'inceptionnft', finished: false },
  { name: 'Play-Learn-Earn', link: 'play-learn-earn', finished: true },
  { name: 'Careers', link: 'careers', finished: true },
  { name: 'Connect', link: 'connect', finished: true },
]

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
        <NavDesktop links={headerLinks} />
        <NavMobile links={headerLinks} />

      </header>
    </Container>
  )
}

export default Header;
