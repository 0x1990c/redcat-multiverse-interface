import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../header.module.scss';

export const NavMobileLinks = ({ links, onOpenConnectModal, onCloseNav }: any) => {
	const router = useRouter();

	const handleConnectClick = () => {
		onOpenConnectModal()
	}

	const handleLinkClick = (link: any) => {
		router.push(link);

		onCloseNav();
	}

	return (
		<div className={styles['container-options-links']}>
			{
				links.map((link: any, index: any) => {
					if (link.link === 'whitepaper') {
						return (
							<a className={styles.option} key={index} href='https://whitepaper.redcatmultiverse.io/' target='_blank' rel="noreferrer">
								{link.name}
								<div className={styles['line-gradient']}></div>
								{link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
							</a>
						)
					}
					if (link.link === 'connect') {
						return (
							<a className={styles.option} key={index} target='_blank' rel="noreferrer" onClick={handleConnectClick}>
								{link.name}
								<div className={styles['line-gradient']}></div>
							</a>
						)
					}
					if (link.finished == false) {
						return (
							<a className={styles.option} key={index} rel="noreferrer">
								{link.name}
								<div className={styles['line-gradient']}></div>
								{link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
							</a>
						)
					}
					return (
						// <Link key={index} href={`/${link.link.toLowerCase()}`}>
						// 	<a className={styles.option}>
						// 		{link.name}
						// 		<div className={styles['line-gradient']}></div>
						// 	</a>
						// </Link>
						<a className={styles.option} key={index} onClick={() => handleLinkClick(link.link.toLowerCase())}>
							{link.name}
							<div className={styles['line-gradient']}></div>
						</a>
					)
				})
			}
		</div>
	)
}
