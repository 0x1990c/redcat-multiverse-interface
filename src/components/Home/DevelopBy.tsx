import React from 'react'
import cx from 'classnames';
import GradientText from '../gradientText/GradientText'
import randomElement from '../../helpers/elementRandomArray'
import styles from './HomeHero.module.scss'
import { combinationColors } from './helpers/lineCombinations'


export const DevelopBy = () => {

	const { element } = randomElement(['orange-red', 'yellow', 'orange', 'light-blue']);

	const { color, color2 } = combinationColors(element)

	return (
		<div className={cx(styles['container-info'], styles[element !== '' ? element : 'orange'])}>
			<GradientText
				element='h1'
				text='REDCAT MULTIVERSE'
				innerColor={'#FFF'}
				gradient={[`${color}`]}
				fontSize={'60px'}
			></GradientText>

			<h2 className={styles.subtitle}> Play &gt;&gt; Learn &gt;&gt; Earn </h2>

			<div className={styles['line-gradient']}
				style={{
					background: `linear-gradient(to right, ${color2})`,
					height: '2px',
				}}
			></div>

			<div className={styles['container-info-develop']}>
				<p className={styles.develop}> DEVELOPED BY MINDS FROM </p>
			</div>

			<div className={styles['container-info-brands']}>
				<img src='/images/HomeHero/Brands/mit-logo.svg' />
				<img src='/images/HomeHero/Brands/stanford-university.svg' />
				<img src='/images/HomeHero/Brands/riot-games-logo.svg' />
				<img src='/images/HomeHero/Brands/algorand-logo.svg' />
			</div>

			<div className={styles['container-info-footer']}>
				<p> Backed by 25+ highly  prominent investors from around the globe. </p>
			</div>
		</div>
	)
}
