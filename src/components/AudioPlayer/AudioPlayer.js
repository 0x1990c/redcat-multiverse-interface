/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";

const useAudio = (url) => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(url) : undefined);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    console.log('===> trying playing');
    setPlaying(!playing);
  }

  useEffect(() => {
    console.log('audio', audio, playing);
    if (audio) {
      console.log('audio trying play', audio, playing);
      playing ? audio.play() : audio.pause();
    }
  }, [audio, playing]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => setPlaying(false));
      }
    };

  }, []);

  return [playing, toggle];
};

const AudioPlayer = ({ url }) => {
  // const [playing, toggle] = useAudio(url);
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);

  const toggle = () => {

  }

  useEffect(() => {
    console.log('audioRef.current.play();')
    if (audioRef && audioRef.current) {
      console.log('audioRef.current.play() ===> ')
      audioRef.current.play();
    }
  }, []);

  return (
    <div>
      <audio preload="auto" autoPlay={true} src={url} ref={audioRef}></audio>
      <button onClick={() => toggle()}>{playing ? "Pause" : "Play"} -- {playing.toString()} - {url}</button>
    </div>
  );
};

export default AudioPlayer;
