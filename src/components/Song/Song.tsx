import { SongStyles, CoverStyles, SongInfoStyles } from "../styles/Song.styled";
import { SongObj } from "../utils/interfaces";

interface Props {
  song: SongObj,
  active: boolean,
  handleSongClick: (id : string) => void
}

const Song = ({ song, active, handleSongClick }: Props) => {
  return (
    <SongStyles $active={active} as={"button"} onClick={() => handleSongClick(song.id)}>
      <CoverStyles $size={"small"}>
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
