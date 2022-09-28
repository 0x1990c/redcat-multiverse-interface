/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Container from '../container/Container'
import styles from './header.module.scss'
import connectModalStyles from '../../components/ConnectModal/ConnectModal.module.scss';
import { themeChanger } from './helpers/themeChanger';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './components/NavDesktop';
import ConnectModal from '../ConnectModal/ConnectModal';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const Header = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const { theme } = themeChanger();

  const { t } = useTranslation('common');

  const headerLinks = [
    { name: 'PLE', link: 'play-learn-earn', finished: true },
    { name: t('header.roadmap'), link: 'roadmap', finished: true },
    { name: t('header.multiverse'), link: 'multiverse', finished: true },
    { name: 'InceptionNFT', link: 'inceptionnft', finished: true },
    { name: t('header.community'), link: 'community', finished: true },
    { name: t('header.whitepaper'), link: 'whitepaper', finished: true },
    // { name: 'Blog', link: 'blog', finished: true },
    // { name: t('header.careers'), link: 'careers', finished: true },
    { name: 'Connect', link: 'connect', finished: true }
  ]

  const handleOpenConnectModal = () => {
    document.body.style.overflowY = 'hidden';
    setIsConnectModalOpen(true);
  }

  const handleCloseConnectModal = () => {
    document.body.style.overflowY = 'auto';
    setIsConnectModalOpen(false);
  }

  return (
    <>
      <AudioPlayer />
      <Container className={styles.headerContainer}>
        <header className={styles.header}>
          <Link href="/">
            <a>
              <img src='/images/rcm-logo-red.svg' alt='RCM Logo' className={styles.headerLogo} />
            </a>
          </Link>
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
    </>
  )
}

export default Header;
