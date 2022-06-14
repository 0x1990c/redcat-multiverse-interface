import styles from '../header.module.scss'


export const LinksIcons = () => {

	return (
		<div className={styles.icons}>
			<a href='https://discord.gg/JTnry5xubQ' target='_blank' rel="noreferrer">
				<img src='/images/discord-icon.svg' />
			</a>
			<a href='https://opensea.io/collection/rcm-meerkat-bag' target='_blank' rel="noreferrer">
				<img src='/images/open-sea-icon.svg' />
			</a>
			<a href='https://twitter.com/TheRedCats' target='_blank' rel="noreferrer">
				<img src='/images/twitter-icon.svg' />
			</a>
			<a href='https://www.reddit.com/r/redcatmultiverse/' target='_blank' rel="noreferrer">
				<img src='/images/reddit-icon.svg' />
			</a>
			<a href='https://www.instagram.com/redcatmultiverse/' target='_blank' rel="noreferrer">
				<img src='/images/ig-icon.svg' />
			</a>
		</div>
	)
}
