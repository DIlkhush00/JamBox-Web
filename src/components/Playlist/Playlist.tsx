import { PlaylistStyle } from "../styles/Playlist.styled";
import Song from "../Song";

const NNUMS : number[] = [1, 2, 3, 4, 5];
const COLORS : string[] = ['red', 'blue', 'hotpink', 'green', 'yellow'];

function Playlist() {
  return (
    <PlaylistStyle>
      {NNUMS.map((value, i) => {
        return (
          <Song key={i} index={value} color={COLORS[i % 5]} />
        )
      })}
    </PlaylistStyle>
  );
}

export default Playlist;
