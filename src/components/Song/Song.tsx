import { SongStyles, CoverStyles, SongInfoStyles } from "../styles/Song.styled";
import { SongObj } from "../utils/interfaces";


interface Props {
  song: SongObj,
}

const Song = ({ song } : Props) => {
  return (
    <SongStyles $bgcolor={'red'} >
      <CoverStyles>
        <img src={song.coverImage} alt="odoriko song cover" width={100} />
      </CoverStyles>
      <SongInfoStyles>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </SongInfoStyles>
    </SongStyles>
  );
}

export default Song;
