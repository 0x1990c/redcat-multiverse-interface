import React from 'react'
import styles from '../header.module.scss'

export const NavMobileLinks = ({ links }: any) => {
	return (
		<div className={styles['container-options-links']}>
			{
				links.map((link: any, index: any) => (
					<a className={styles.option} key={index} href={`/${link.link.toLowerCase()}`}>
						{link.name}
						<div className={styles['line-gradient']}></div>
						{link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
					</a>
				))
			}
		</div>
	)
}
