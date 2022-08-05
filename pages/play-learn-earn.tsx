import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PLE from '../src/components/PLE/PLE';

const PLEPage = () => {
  return <PLE />
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'plePage'])
  }
})

export default PLEPage;
