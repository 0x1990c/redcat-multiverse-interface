import React from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-responsive-modal';

export interface VideoPlayerProps {
  open: boolean;
  toggleModal: () => void;
}

const VideoPlayer = ({ open, toggleModal }: VideoPlayerProps) => {
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      styles={{
        modal: {
          maxWidth: 'unset',
          width: '100%',
          padding: 'unset',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
        closeButton: {
          background: 'red',
        },
      }}
      center
    >
      <ReactPlayer
        url='https://vimeo.com/775093795'
        width='100%'
        height='calc(100vh - 100px)'
        controls={true}
      />
    </Modal>
  );
};
export default VideoPlayer;
