import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import { LinksIcons } from './LinksIcons';
import styles from '../header.module.scss'
import RadioSwitch from '../../RadioSwitch/RadioSwitch';


export const NavDesktop = ({ links }: any) => {
	const router = useRouter();
	const { systemTheme, theme, setTheme } = useTheme();

	const darkBackgroundPages = ['/multiverse', '/play-learn-earn']

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleClick = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	const isDarkBackgroundPage = () => darkBackgroundPages.includes(router.pathname);

	return (
		<nav className={`${styles.navbar} ${isDarkBackgroundPage() ? styles.darkPage : ''}`}>
			<div>
				{links.map((link: any, index: any) => (
					<a key={index} href={`/${link.toLowerCase()}`}>
						{index !== 0 && <span>|</span>}
						{link}
					</a>
				))}
			</div>
			{/* nav icons social media */}
			<LinksIcons />
			<RadioSwitch className={styles.themeSwitch} onChange={handleClick} checked={currentTheme === 'dark'} />
		</nav>
	)
}
