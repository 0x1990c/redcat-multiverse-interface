import { CareersCards } from './components/CareersCards';
import { careersInfo } from './helpers/careersInfo'

import { description, values } from './constants';
import styles from './careersComponents.module.scss'

export const Careers = () => {
	return (
		<div className={styles['container-background']}>
			<div className={styles['container-description']}>
				{description.map((txt, idx) => (<p key={idx}>{txt}</p>))}
				<p className={styles.valueTitle}>{values.title}</p>
				{values.texts.map((txt, idx) => (<p key={idx}>
					{txt}
				</p>))}
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
