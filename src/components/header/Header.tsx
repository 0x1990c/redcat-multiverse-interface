/* eslint-disable @next/next/no-html-link-for-pages */
import Container from '../container/Container'
import styles from './header.module.scss'
import connectModalStyles from '../../components/ConnectModal/ConnectModal.module.scss';
import { themeChanger } from './helpers/themeChanger';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './components/NavDesktop';
import { useState } from 'react';
import ConnectModal from '../ConnectModal/ConnectModal';

const headerLinks = [
  { name: 'PLE', link: 'play-learn-earn', finished: true },
  { name: 'Roadmap', link: 'roadmap', finished: true },
  { name: 'The Multiverse', link: 'multiverse', finished: true },
  { name: 'InceptionNFT', link: 'inceptionnft', finished: false },
  { name: 'Community', link: 'community', finished: true },
  { name: 'Whitepaper', link: 'whitepaper', finished: true },
  { name: 'Careers', link: 'careers', finished: true },
  { name: 'Connect', link: 'connect', finished: true },
  { name: 'Media', link: 'media', finished: true },
]

const Header = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const { theme } = themeChanger();

  const handleOpenConnectModal = () => {
    document.body.style.overflowY = 'hidden';
    setIsConnectModalOpen(true);
  }

  const handleCloseConnectModal = () => {
    document.body.style.overflowY = 'auto';
    setIsConnectModalOpen(false);
  }

  return (
    <Container className={styles.headerContainer}>
      <header className={styles.header}>
        {
          theme != 'dark'
            ? (<a href="/"><img src='./images/rcm-logo-red.svg' alt='RCM Logo' className={styles.headerLogo} /></a>)
            : (<a href="/"><img src='./images/rcm-logo-white.svg' alt='RCM Logo' className={styles.headerLogo} /></a>)
        }
        <NavDesktop links={headerLinks} onOpenConnectModal={handleOpenConnectModal} />
        <NavMobile links={headerLinks} onOpenConnectModal={handleOpenConnectModal} />
        {/* Connect Modal part */}
        {isConnectModalOpen && (
          <div className={connectModalStyles.modalBackDrop}>
            <div className={connectModalStyles.modalWrapper}>
              <ConnectModal onClose={handleCloseConnectModal} />
            </div>

          </div>
        )}
      </header>
    </Container>
  )
}

export default Header;
