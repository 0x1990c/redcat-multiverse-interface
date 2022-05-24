import React from 'react'
import styles from '../header.module.scss'

export const NavMobileLinks = ({ links }: any) => {
	return (
		<div className={styles['container-options-links']}>
			{
				links.map((link: any, index: any) => (
					<a className={styles.option} key={index} href={`/${link.toLowerCase()}`}>
						{link}
						<div className={styles['line-gradient']}> </div>
					</a>
				))
			}
		</div>
	)
}
