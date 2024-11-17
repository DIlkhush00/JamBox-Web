import { useEffect, useState, useRef } from "react";
import { useAudio } from "../../hooks/useAudio";
import { Play, Pause, Rewind, FastForward } from "react-feather";
import {
  PlayerContainer,
  TimeDisplay,
  ProgressBar,
  Button,
  PlayButton,
  Controls,
} from "../styles/AudioPlayer.styled";

type Props = {
  audioFileURL: string;
};

function AudioPlayer({ audioFileURL }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, toggleAudio, stopAudio] = useAudio(audioRef);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  
  useEffect(() => {
    const audio = audioRef.current;

    const updateDuration = () => {
      if (audio?.duration) {
        setDuration(audio.duration);
      }
    };

    const updateCurrentTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleAudioEnd = () => {
      setCurrentTime(0);
      stopAudio();
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [audioRef, stopAudio]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const rewind = () => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 10); // Ensures time doesn’t go below 0
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skip = () => {
    if (audioRef.current) {
      const newTime = Math.min(duration, audioRef.current.currentTime + 10); // Ensures time doesn’t exceed duration
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <PlayerContainer>
      <div style={{ display: "none" }}>
        <audio src={audioFileURL} ref={audioRef} />
      </div>
      <TimeDisplay>
        <span>{formatTime(currentTime)}</span>
        <ProgressBar
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            const newTime = parseFloat(e.target.value);
            setCurrentTime(newTime);
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
            }
          }}
          disabled = {audioFileURL === undefined} 
            $max = {duration}
            $value = {currentTime}
        />
        <span>{duration ? `${formatTime(duration)}` : "Loading..."}</span>
      </TimeDisplay>
      <Controls>
        <Button onClick={rewind} disabled = {audioFileURL === undefined} >{<Rewind />}</Button>
        <PlayButton onClick={toggleAudio} disabled = {audioFileURL === undefined} >
          {isPlaying ? <Pause /> : <Play />}
        </PlayButton>
        <Button onClick={skip} disabled = {audioFileURL === undefined} >{<FastForward />}</Button>
        {/* <Button onClick={stopAudio}>Stop</Button> */}
      </Controls>
    </PlayerContainer>
  );
}

export default AudioPlayer;
