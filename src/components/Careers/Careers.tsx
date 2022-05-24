import { CareersCards } from './components/CareersCards';
import { careersInfo } from './helpers/careersInfo'

import styles from './careersComponents.module.scss'

export const Careers = () => {
	return (
		<div className={styles['container-background']}>
			<div className={styles['container-description']}>
				<p>
					Do you have what it takes to create adventures in the Red Cat Multiverse? Here are a few of the talented and passionate people we’re looking for to join our team.
				</p>
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
