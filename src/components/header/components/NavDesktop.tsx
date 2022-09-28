import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinksIcons } from './LinksIcons';
import { useICNFTContext } from '../../../contexts/ICNFTContext';
import styles from '../header.module.scss'
import RadioSwitch from '../../RadioSwitch/RadioSwitch';
import LangDropDown from './LangDropDown';

export const NavDesktop = ({ links, onOpenConnectModal }: any) => {
	const router = useRouter();
	const { systemTheme, theme, setTheme } = useTheme();

	const darkBackgroundPages = ['/', '/multiverse'];

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleClick = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	const { slideIdx } = useICNFTContext();

	const isDarkBackgroundPage = () => darkBackgroundPages.includes(router.pathname);

	const isInceptionPage = () => (['/inceptionnft']).includes(router.pathname);

	const inceptionBack = () => {
		switch (slideIdx) {
			case 0:
				return 'dark';
			case 1:
				return 'dark';
			case 2:
				return 'dark';
			case 3:
				return 'dark';
			case 4:
				return 'light';
			case 5:
				return 'light';
			case 6:
				return 'dark';
			case 7:
				return 'dark';
			default:
				return 'dark';
		}
	}

	const handleConnectClick = () => {
		onOpenConnectModal()
	}

	return (
		<nav
			className={`
				${styles.navbar}
				${isDarkBackgroundPage() ? styles.darkPage : ''}
				${isInceptionPage() ? `${styles.inceptionPage} ${styles[inceptionBack()]}` : ''}
			`}
		>
			<div>
				{links.map((link: any, index: any) => {
					if (link.link === 'whitepaper') {
						return (
							<a className={styles.option} key={index} href='https://whitepaper.redcatmultiverse.io/' target='_blank' rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					if (link.link === 'blog') {
						return (
							<a className={styles.option} key={index} href='https://blog.redcatmultiverse.io/' target='_blank' rel="noreferrer">
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
					if (link.finished === false) {
						return (
							<a key={index} className={styles.soonPage} rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
								{link.finished === false && (<div className={styles.soonBadge}>soon</div>)}
							</a>
						)
					}
					return (
						<Link key={index} href={`/${link.link.toLowerCase()}`}>
							<a>
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						</Link>
					)
				})}
			</div>
			{/* nav icons social media */}
			<LinksIcons />
			<LangDropDown isDarkPage={isDarkBackgroundPage()} />
			<RadioSwitch className={styles.themeSwitch} onChange={handleClick} checked={currentTheme === 'dark'} />
		</nav>
	)
}
