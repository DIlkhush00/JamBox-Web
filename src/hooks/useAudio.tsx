import { useState, useEffect, useRef } from 'react';

export const useAudio = (audioFileURL : string) => {
    const audioRef = useRef(new Audio(audioFileURL));
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        setIsPlaying((prev) => !prev);
    };

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        // Cleanup function to stop the audio when the component unmounts
        return () => {
            audioRef.current.pause();
            // audioRef.current.currentTime = 0;
        };
    }, [isPlaying]);

    useEffect(() => {
        // Stop current audio when the song URL changes
        stopAudio();
        audioRef.current = new Audio(audioFileURL);
    }, [audioFileURL]);

    return [isPlaying, toggleAudio, stopAudio];
};
