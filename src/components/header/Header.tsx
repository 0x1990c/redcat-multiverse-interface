import Container from '../container/Container'
import styles from './header.module.scss'
import { themeChanger } from './helpers/themeChanger';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './components/NavDesktop';

const links = ['Lore', 'Whitepaper', 'Roadmap', 'Careers', 'Community']

const Header = () => {

    const { theme } = themeChanger();

    return (
        <Container>
            <header className={styles.header}>
                {
                    theme != 'dark'
                        ? (<a href="/community"><img src='./images/rcm-logo-red.svg' alt='RCM Logo' /></a>)
                        : (<a href="/community"><img src='./images/rcm-logo-white.svg' alt='RCM Logo' /></a>)
                }
                <NavDesktop links={links} />
                <NavMobile links={links} />

            </header>
        </Container>
    )
}

export default Header