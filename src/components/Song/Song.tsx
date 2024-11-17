import { SongStyles, CoverStyles, SongInfoStyles } from "../styles/Song.styled";
import { SongObj } from "../utils/interfaces";

interface Props {
  song: SongObj,
  handleSongClick: (id : string) => void
}

const Song = ({ song, handleSongClick }: Props) => {
  return (
    <SongStyles $bgcolor={"red"} as={"button"} onClick={() => handleSongClick(song.id)}>
      <CoverStyles>
        <img src={song.coverImage} alt={`${song?.title} song cover`} />
      </CoverStyles>
      <SongInfoStyles>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </SongInfoStyles>
    </SongStyles>
  );
};

export default Song;
