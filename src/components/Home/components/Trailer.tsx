import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import { useTranslation } from 'react-i18next';
import styles from './Trailer.module.scss';

const Trailer = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const OpenTrailer = ({
    openModal,
    label,
  }: {
    openModal: Function;
    label: string;
  }) => {
    const btnRef = useRef(null);
    function handleClick() {
      setPlaying(true);
      openModal(btnRef);
    }

    return (
      <button
        className={styles['trailer-title']}
        ref={btnRef}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  };

  const { modalProps, open } = useModal({
    onClose() {
      setPlaying(false);
    },
  });
  const { t } = useTranslation('common');
  return (
    <>
      <OpenTrailer openModal={open} label={t('cta.trailer')} />
      <Modal {...{ padding: false, ...modalProps }}>
        {hasWindow && (
          <ReactPlayer
            playing={playing}
            url='https://player.vimeo.com/progressive_redirect/playback/775910876/rendition/1080p/file.mp4?loc=external&signature=f3db7d46329b0586998ede513e6d01cdffa9048f9fd7e081181e7ea71eb0d8dd'
            width='100%'
            height='calc(100vh - 100px)'
            controls={true}
          />
        )}
      </Modal>
    </>
  );
};
export default Trailer;
