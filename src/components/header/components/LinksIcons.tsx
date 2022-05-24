import { themeChanger } from '../helpers/themeChanger';
import styles from '../header.module.scss'


export const LinksIcons = () => {
	const { renderThemechanger } = themeChanger();

	return (
		<div className={styles.icons}>
			<a href=''>
				<img src='./images/discord-icon.svg' />
			</a>

			<a href=''>
				<img src='./images/open-sea-icon.svg' />
			</a>
			<a href=''>
				<img src='./images/twitter-icon.svg' />
			</a>
			<a>
				{renderThemechanger()}
			</a>
			<a href=''>
				<img src='./images/ig-icon.svg' />
			</a>
		</div>
	)
}
