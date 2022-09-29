import { useTranslation } from 'next-i18next';
import styles from './ICNFTFAQ.module.scss';
import FAQItem from './FAQItem/FAQItem';

const ICNFTFAQ = () => {
  const faqItems = [0, 1, 2, 3, 4, 5, 6, 7];
  const { t } = useTranslation('icnft');

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>
        FAQ
      </div>
      {faqItems.map((faq: any, idx: any) => (
        <FAQItem key={idx} question={t(`faq.${faq}.question`)} answer={t(`faq.${faq}.answer`)} />
      ))}
    </div>
  )
}

export default ICNFTFAQ;

