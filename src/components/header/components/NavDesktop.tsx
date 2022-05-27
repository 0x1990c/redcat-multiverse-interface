import React from 'react'
import { LinksIcons } from './LinksIcons';
import styles from '../header.module.scss'

export const NavDesktop = ({ links }: any) => {
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
		</nav>
	)
}
