import { useState } from 'react';
import parse from 'html-react-parser';
import styles from './FAQItem.module.scss';

import useCollapse from 'react-collapsed';

const FAQItem = ({ question, answer }: any) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })


  return (
    <div className={styles.faqItemContainer}>
      <div className={styles.questionSection}>
        <div className={`${styles.question} ${isExpanded ? styles.active : ''}`}>{question}</div>
        <button
          className={`${styles.collapseBtn}`}
          {...getToggleProps({
            style: { display: "block" },
            onClick: () => setExpanded((x) => !x)
          })}
        >
          {isExpanded ? parse("&#8722;") : parse("&#43;")}
        </button>
      </div>
      <div className={styles.answer} {...getCollapseProps()}>
        {answer}
      </div>

    </div>
  )
}

export default FAQItem;