import PropTypes from 'prop-types'
import styles from '../careersComponents.module.scss'
import cx from 'classnames';

export const CareersCards = ({ card, index }: any) => {
	const { border, colorText, category, title, description, button, external } = card;

	const handleClick = () => {
		window.open(external, '_blank');
	}

	return (
		<div className={cx(styles.card, styles[border])} key={index}>
			<div>
				<h2 className={cx(styles.category, styles[colorText])}> {category.toUpperCase()} </h2>
				<h1 className={styles.title}> {title.toUpperCase()} </h1>
				<p className={styles.description}> {description} </p>
			</div>
			<div className={styles['container-button']}>
				<button className={styles.button} onClick={handleClick}> {button} </button>
			</div>
		</div>
	)
}

CareersCards.proptypes = {
	card: PropTypes.object.isRequired
}