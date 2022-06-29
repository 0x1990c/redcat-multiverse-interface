import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import styles from './AudioPlayer.module.scss';
import Image from "next/image";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playUrl, setPlayUrl] = useState();
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const handleBackgroundAudio = () => {
    console.log('handleBackgroundAudio ==> calling')
    setPlaying(!playing);
    sessionStorage.setItem('playingAudio', (!playing).toString());
  }

  const handleMouseOver = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
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
          setPlayUrl('/audios/scifi.mp3')
          break;
        case '/multiverse':
          setPlayUrl('/audios/evolution.mp3')
          break;
        case '/play-learn-earn':
          setPlayUrl('/audios/scifi.mp3')
          break;
        default:
          setPlayUrl('/audios/scifi.mp3');
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
      {/* <button onClick={handleBackgroundAudio}>{playing === true ? "PAUSE" : "PLAY"}</button> */}
      <button onClick={handleBackgroundAudio} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {playing
          ? <div className={styles.playBtn}><Image src={'/images/play_button.gif'} alt='Mute' layout='fill' /></div>
          : <div className={styles.playBtn}><Image src={'/images/mute_button.jpg'} alt='Unmute' layout='fill' /></div>
        }
      </button>
      {isHover && (
        <div className={styles.toolTip}>
          {playing ? 'Mute' : 'Unmute'}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
