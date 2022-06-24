import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import styles from './AudioPlayer.module.scss';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playUrl, setPlayUrl] = useState();
  const router = useRouter();

  const handleBackgroundAudio = () => {
    console.log('handleBackgroundAudio ==> calling')
    setPlaying(!playing);
    sessionStorage.setItem('playingAudio', (!playing).toString());
  }

  useEffect(() => {
    if (sessionStorage.getItem('playingAudio')) {
      if (sessionStorage.getItem('currentPath')) {
        const prevPath = sessionStorage.getItem('currentPath');
        if (prevPath === router.pathname) { // previous page is same to current page means refresh
          sessionStorage.setItem('playingAudio', playing.toString());
        } else { // previous page is not same to current page means page navigation
          setPlaying(sessionStorage.getItem('playingAudio') === 'true');
        }
      } else { // previous history is null means first visit website
        sessionStorage.setItem('playingAudio', playing.toString());
      }

    } else {
      sessionStorage.setItem('playingAudio', playing.toString());
    }

    if (!sessionStorage) {
      return;
    }

    const currentPath = router.pathname;
    sessionStorage.setItem('currentPath', currentPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.isReady) {
      console.log(router.pathname);
      switch (router.pathname) {
        case '/':
          setPlayUrl('/audios/Sanura_Comics.mp3')
          break;
        case '/play-learn-earn':
          setPlayUrl('/audios/Sanura_Comics.mp3')
          break;
        default:
          setPlayUrl('/audios/forest-lullaby-110624.mp3');
          break;
      }
    }
  }, [router]);

  useEffect(() => {
    if (audioRef && audioRef.current && playing === true && typeof window !== undefined) {
      audioRef.current.play();
    }

    if (audioRef && audioRef.current && playing === false) {
      audioRef.current.pause();
    }
  }, [audioRef, playing]);

  return (
    <div className={styles.audioPlayerWrapper}>
      <audio preload="auto" loop={true} autoPlay={false} src={playUrl} ref={audioRef} />
      <button onClick={handleBackgroundAudio}>{playing === true ? "PAUSE" : "PLAY"}</button>
    </div>
  );
};

export default AudioPlayer;
