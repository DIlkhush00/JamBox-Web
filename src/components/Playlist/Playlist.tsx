import { PlaylistStyle, PlaylistWrapperStyle } from "../styles/Playlist.styled";
import Song from "../Song";
import { SongObj } from "../utils/interfaces";

interface Props {
  songs: SongObj[];
  handleSongClick: (id: string) => void;
}

function Playlist({ songs, handleSongClick }: Props) {
  return (
    <PlaylistWrapperStyle>
      <PlaylistStyle>
        {songs.map((song, i) => {
          return <Song key={i} song={song} handleSongClick={handleSongClick} />;
        })}
      </PlaylistStyle>
    </PlaylistWrapperStyle>
  );
}

export default Playlist;
