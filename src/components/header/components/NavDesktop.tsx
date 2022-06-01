import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import { LinksIcons } from './LinksIcons';
import styles from '../header.module.scss'
import RadioSwitch from '../../RadioSwitch/RadioSwitch';


export const NavDesktop = ({ links, onOpenConnectModal }: any) => {
	const router = useRouter();
	const { systemTheme, theme, setTheme } = useTheme();

	const darkBackgroundPages = ['/multiverse', '/play-learn-earn']

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleClick = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	const isDarkBackgroundPage = () => darkBackgroundPages.includes(router.pathname);

	const handleConnectClick = () => {
		onOpenConnectModal()
	}

	return (
		<nav className={`${styles.navbar} ${isDarkBackgroundPage() ? styles.darkPage : ''}`}>
			<div>
				{links.map((link: any, index: any) => {
					if (link.link === 'whitepaper') {
						return (
							<a className={styles.option} key={index} href='https://redcatmultiverse.substack.com/' target='_blank' rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					if (link.link === 'connect') {
						return (
							<a className={styles.option} key={index} target='_blank' rel="noreferrer" onClick={handleConnectClick}>
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					return (
						<a key={index} href={`/${link.link.toLowerCase()}`} className={styles.soonPage}>
							{index !== 0 && <span>|</span>}
							{link.name}
							{link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
						</a>
					)

				})}
			</div>
			{/* nav icons social media */}
			<LinksIcons />
			<RadioSwitch className={styles.themeSwitch} onChange={handleClick} checked={currentTheme === 'dark'} />
		</nav>
	)
}
