import Container from '../container/Container'
import styles from './header.module.scss'
import { NavMobile } from './NavMobile'
import Link from 'next/link'

const links = ['Lore', 'Whitepaper', 'Community', 'Careers', 'Roadmap']

const Header = () => {
    return (
        <Container>
            <header className={styles.header}>
                <Link href='/'>
                    <a>
                        <img src='./images/rcm-logo-red.svg' alt='RCM Logo' />
                    </a>
                </Link>
                <nav className={styles.navbar}>
                    <div>
                        {links.map((link, index) => (
                            <a key={index} href={`/${link.toLowerCase()}`}>
                                {index !== 0 && <span>|</span>}
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className={styles.icons}>
                        <a href=''>
                            <img src='./images/discord-icon.svg' />
                        </a>
                        <a href=''>
                            <img src='./images/ig-icon.svg' />
                        </a>
                        <a href=''>
                            <img src='./images/open-sea-icon.svg' />
                        </a>
                        <a href=''>
                            <img src='./images/twitter-icon.svg' />
                        </a>
                    </div>
                </nav>
                <NavMobile links={links} />
            </header>
        </Container>
    )
}

export default Header