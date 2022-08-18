import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from '../src/components/container/Container'
import GradientText from '../src/components/gradientText/GradientText'
import { CareersComp } from '../src/components/Careers/CareersComp';
import styles from '../src/styles/careers.module.scss'

const Careers: NextPage = () => {
	const { t } = useTranslation('careersPage');
	const { theme, systemTheme } = useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div>
			<Container className={styles.container}>
				<GradientText
					element='h1'
					text={t('careers')}
					innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
					gradient={['#f9c930', '#f2957c', '#7192f3']}
				/>
				<CareersComp />
			</Container>
		</div>
	)
}

export const getServerSideProps = async ({ locale }: any) => ({
	props: {
		...await serverSideTranslations(locale, ['common', 'careersPage'])
	}
});

export default Careers
