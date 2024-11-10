import { useAudio } from '../../hooks/useAudio';

type Props = {
    audioFileURL: string,
}

function AudioPlayer ({ audioFileURL } : Props) {
    const [isPlaying, toggleAudio, stopAudio] = useAudio(audioFileURL);

    return (
        <div>
            <button onClick={toggleAudio}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={stopAudio}>Stop</button>
        </div>
    );
};

export default AudioPlayer;