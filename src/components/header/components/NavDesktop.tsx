import React from 'react'
import { useTheme } from 'next-themes'
import { LinksIcons } from './LinksIcons';
import styles from '../header.module.scss'
import RadioSwitch from '../../RadioSwitch/RadioSwitch';

export const NavDesktop = ({ links }: any) => {
	const { systemTheme, theme, setTheme } = useTheme();

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleClick = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<nav className={styles.navbar}>
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
			<RadioSwitch className={styles.themeSwitch} onClick={handleClick} />
		</nav>
	)
}
