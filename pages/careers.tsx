import Container from '../src/components/container/Container'
import GradientText from '../src/components/gradientText/GradientText'
import { Careers } from '../src/components/Careers/Careers';
import { useTheme } from 'next-themes'
import styles from '../src/styles/careers.module.scss'

const careers = () => {
	const { theme, systemTheme } = useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme
	return (
		<div>
			<Container className={styles.container}>
				<GradientText
					element='h1'
					text='CAREERS'
					innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
					gradient={['#f9c930', '#f2957c', '#7192f3']}
				/>
				<Careers />
			</Container>
		</div>
	)
}

export default careers
