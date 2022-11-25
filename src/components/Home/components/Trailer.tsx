import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VideoPlayer from './VideoPlayer';
import styles from './Trailer.module.scss';

const Trailer: React.FC = () => {
  const { t } = useTranslation('common');
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <i className={styles['trailer-title']} onClick={toggleModal}>
        {t('cta.trailer')}
      </i>
      {isOpen && <VideoPlayer open={true} toggleModal={toggleModal} />}
    </div>
  );
};

export default Trailer;
