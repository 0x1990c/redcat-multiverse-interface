import { useTranslation } from 'next-i18next';
import { CareersCards } from './components/CareersCards';
import { careersInfo } from './helpers/careersInfo'

import { description } from './constants';
import styles from './careersComponents.module.scss'

export const CareersComp = () => {
	const { t } = useTranslation('careersPage');

	return (
		<div className={styles['container-background']}>
			<div className={styles['container-description']}>
				{description.map((txt, idx) => (<p key={idx}>{t(`descriptions.${txt}`)}</p>))}
				<p className={styles.valueTitle}>{t('values.title')}</p>
				<p>{t('values.text')}</p>
			</div>
			<div className={styles['container-cards']}>
				{
					careersInfo.map((card, index) => (
						<CareersCards key={index} card={card} index={index} />
					))
				}
			</div>
		</div>
	)
}
