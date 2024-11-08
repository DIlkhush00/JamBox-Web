import { PlaylistStyle, PlaylistWrapperStyle } from "../styles/Playlist.styled";
import Song from "../Song";
import { SongObj } from "../utils/interfaces";

interface Props {
  songs: SongObj[]
}

function Playlist({ songs }: Props) {
  return (
    <PlaylistWrapperStyle>
      <PlaylistStyle>
        {songs.map((song, i) => {
          return (
            <Song key={i} song={song} />
          )
        })}
      </PlaylistStyle>
    </PlaylistWrapperStyle>
  );
}

export default Playlist;
