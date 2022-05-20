import styles from './header.module.scss'
import { useState } from 'react';

export const NavMobile = ({ links }: any) => {

	const [show, setShow] = useState(false);

	const handleShowHide = () => {
		setShow(!show);
	}

	return (
		<>
			<nav className={styles['navbar-mobile']}>
				<button onClick={handleShowHide}>
					<img src='./images/three-horizontal-lines.svg' alt='RCM Logo' />
				</button>
				{
					show && (
						<div>
							{links.map((link: any, index: any) => (
								<a key={index} href={`/${link.toLowerCase()}`}>
									{link}
								</a>
							))}
						</div>

					)
				}
			</nav>
		</>
	)
}
