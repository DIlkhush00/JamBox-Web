import { useState, useEffect, MutableRefObject } from 'react';

type RefType = MutableRefObject<HTMLAudioElement | null>;
type UseAudioReturn = [
    boolean,                                   // isPlaying
    () => void,                                // toggleAudio
    () => void                                 // stopAudio
];
  
export const useAudio = (audioRef : RefType) : UseAudioReturn => {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        setIsPlaying((prev) => !prev);
    };

    const stopAudio = () => {
        audioRef?.current?.pause();
        if(audioRef.current)
            audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio?.play();
        } else {
            audio?.pause();
        }

        return () => {
            audio?.pause();
        };
    }, [isPlaying, audioRef]);

    return [isPlaying, toggleAudio, stopAudio];
};
