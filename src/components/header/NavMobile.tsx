/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './header.module.scss'
import { useState } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import { themeChanger } from './helpers/themeChanger';
import { NavMobileLinks } from './components/NavMobileLinks';
import { LinksIcons } from './components/LinksIcons';
import RadioSwitch from '../RadioSwitch/RadioSwitch';

export const NavMobile = ({ links, onOpenConnectModal }: any) => {
	const { setTheme } = useTheme();
	const [show, setShow] = useState(false);
	const { theme } = themeChanger();

	const handleShowHide = () => {
		document.body.style.overflowY = !show ? 'hidden' : 'auto';
		document.body.style.isolation = 'isolate';
		setShow(!show);
	}

	const handleSwitchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	const handleOpenConnectModal = () => {
		onOpenConnectModal();
		setShow(false);
	}

	return (
		<>
			<nav className={styles['navbar-mobile']}>
				<button onClick={handleShowHide}>
					{
						show
							? (<img src='/images/x-symbol.svg' alt='RCM Logo' />)
							: (<img src='/images/three-horizontal-lines.svg' alt='RCM Logo' />)
					}
				</button>
				{
					show && (
						<div className={styles['container-glass']}>
							<div className={`${styles['container-options']} ${show && styles['slide-left']}`}>
								<div className={styles['container-brand']}>
									<Link href="/">
										<a className={styles.brand} onClick={handleShowHide}>
											{
												theme == 'dark'
													? (<img src='/images/rcm-logo-white.svg' alt='RCM Logo' />)
													: (<img src='/images/rcm-logo-red.svg' alt='RCM Logo' />)
											}
										</a>
									</Link>
									<RadioSwitch className={styles.themeSwitch} onChange={handleSwitchTheme} checked={theme === 'dark'} />
								</div>
								<div className={styles['container-links']}>
									<NavMobileLinks links={links} onOpenConnectModal={handleOpenConnectModal} onCloseNav={handleShowHide} />
									<LinksIcons />
								</div>
							</div>
						</div>
					)
				}
			</nav>
		</>
	)
}
