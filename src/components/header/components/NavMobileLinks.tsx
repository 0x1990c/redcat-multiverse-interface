import React from 'react'
import styles from '../header.module.scss'

export const NavMobileLinks = ({ links, onOpenConnectModal }: any) => {
	const handleConnectClick = () => {
		onOpenConnectModal()
	}
	return (
		<div className={styles['container-options-links']}>
			{
				links.map((link: any, index: any) => {
					if (link.link === 'whitepaper') {
						return (
							<a className={styles.option} key={index} href='https://redcatmultiverse.substack.com/' target='_blank' rel="noreferrer">
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
						<a className={styles.option} key={index} href={`/${link.link.toLowerCase()}`}>
							{link.name}
							<div className={styles['line-gradient']}></div>
						</a>
					)
				})
			}
		</div>
	)
}
