import PropTypes from 'prop-types'
import styles from '../careersComponents.module.scss'
import cx from 'classnames';

export const CareersCards = ({ card, index }: any) => {
	const { border, colorText, category, title, description, button } = card
	return (
		<div className={cx(styles.card, styles[border])} key={index}>
			<h2 className={cx(styles.category, styles[colorText])}> {category.toUpperCase()} </h2>
			<h1 className={styles.title}> {title.toUpperCase()} </h1>
			<p className={styles.description}> {description} </p>
			<div className={styles['container-button']}>
				<button className={styles.button}> {button} </button>
			</div>
		</div>
	)
}

CareersCards.proptypes = {
	card: PropTypes.object.isRequired
}