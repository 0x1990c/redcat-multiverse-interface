import React from 'react'
import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import GradientText from '../gradientText/GradientText'
import randomElement from '../../helpers/elementRandomArray'
import styles from './HomeHero.module.scss'
import { combinationColors } from './helpers/lineCombinations'


export const DevelopBy = () => {
	const { t } = useTranslation('home');
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

			<h2 className={`${styles.subtitle} ${'text-capitalize'}`}> {t('play')} &gt;&gt; {t('learn')} &gt;&gt; {t('earn')}</h2>

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
				<p>{t('backedBy')}</p>
			</div>
		</div>
	)
}
