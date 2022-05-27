import React from 'react'
import cx from 'classnames';
import GradientText from '../gradientText/GradientText'
import randomElement from '../../helpers/elementRandomArray'
import styles from './ParallaxHero.module.scss'


export const DevelopBy = () => {

	const { element: color } = randomElement(['orange-red', 'yellow', 'orange', 'light-blue']);

	return (
		<div className={cx(styles['container-info'], styles[color !== '' ? color : 'orange'])}>
			<GradientText
				element='h1'
				text='REDCAT MULTIVERSE'
				innerColor={'#FFF'}
				gradient={['#e83324', '#e83324', '#e83324']}
				fontSize={'60px'}
			></GradientText>

			<h2 className={styles.subtitle}> Play - Earn - Learn </h2>

			<div className={styles['line-gradient']}></div>

			<div className={styles['container-info-develop']}>
				<p className={styles.develop}> DEVELOPED BY MINDS FROM </p>
			</div>

			<div className={styles['container-info-brands']}>
				<img src='./images/HomeHero/Brands/mit-logo.svg' />
				<img src='./images/HomeHero/Brands/mit-logo.svg' />
				<img src='./images/HomeHero/Brands/riot-games-logo.svg' />
				<img src='./images/HomeHero/Brands/algorand-logo.svg' />
			</div>

			<div className={styles['container-info-footer']}>
				<p> Backed by 25+ highly  prominent investors from around the globe. </p>
			</div>
		</div>
	)
}
