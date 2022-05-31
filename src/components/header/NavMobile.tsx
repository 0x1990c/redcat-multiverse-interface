/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './header.module.scss'
import { useState } from 'react';
import { useTheme } from 'next-themes'
import { themeChanger } from './helpers/themeChanger';
import { NavMobileLinks } from './components/NavMobileLinks';
import { LinksIcons } from './components/LinksIcons';
import RadioSwitch from '../RadioSwitch/RadioSwitch';

export const NavMobile = ({ links }: any) => {
	const { setTheme } = useTheme();
	const [show, setShow] = useState(false);
	const { theme } = themeChanger();

	const handleShowHide = () => {
		setShow(!show);
	}

	const handleSwitchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<>
			<nav className={styles['navbar-mobile']}>
				<button onClick={handleShowHide}>
					{
						show
							? (<img src='./images/x-symbol.svg' alt='RCM Logo' />)
							: (<img src='./images/three-horizontal-lines.svg' alt='RCM Logo' />)
					}
				</button>
				{
					show && (
						<div className={styles['container-glass']}>
							<div className={`${styles['container-options']} ${show && styles['slide-left']}`}>
								<div className={styles['container-brand']}>
									<a className={styles.brand} href="/community">
										{
											theme == 'dark'
												? (<img src='./images/rcm-logo-white.svg' alt='RCM Logo' />)
												: (<img src='./images/rcm-logo-red.svg' alt='RCM Logo' />)
										}
									</a>
									<RadioSwitch className={styles.themeSwitch} onChange={handleSwitchTheme} checked={theme === 'dark'} />
								</div>
								<div className={styles['container-links']}>
									<NavMobileLinks links={links} />
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
