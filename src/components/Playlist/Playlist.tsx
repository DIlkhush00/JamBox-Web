import {
  PlaylistStyle,
  PlaylistWrapperStyle,
  UploadButton,
  PlaylistHeader,
} from "../styles/Playlist.styled";
import Song from "../Song";
import { SongObj } from "../utils/interfaces";
import { Upload } from "react-feather";

interface Props {
  songs: SongObj[];
  handleSongClick: (id: string) => void;
  handleSongs: (songsList: SongObj[]) => void;
}

const handleUpload = (
  event: React.ChangeEvent<HTMLInputElement>,
  handleSongs: (songsList: SongObj[]) => void
) => {
  const files = Array.from(event.target.files || []);
  const newSongsList: SongObj[] = [];
  files.forEach((file) => {
    const audioURL = URL.createObjectURL(file);

    const audio = new Audio(audioURL);
    audio.addEventListener("loadedmetadata", () => {
      const song: SongObj = {
        id: crypto.randomUUID(),
        title: file.name.replace(/\.[^/.]+$/, ""),
        artist: "Unknown Artist",
        coverImage: "/Default Cover.png",
        duration: Math.round(audio.duration),
        audio: audioURL,
      };

      newSongsList.push(song);
      handleSongs(newSongsList);
    });
  });
};

function Playlist({ songs, handleSongClick, handleSongs }: Props) {
  return (
    <PlaylistWrapperStyle>
      <PlaylistStyle>
        {songs.length > 0 && <PlaylistHeader>
          <span>Playlist</span>
          <UploadButton>
            <label htmlFor="input-file">
              <Upload className="upload small" size={24} />
            </label>
            <input
              id="input-file"
              type="file"
              accept="audio/*"
              multiple
              onChange={(event) => handleUpload(event, handleSongs)}
            />
          </UploadButton>
        </PlaylistHeader>}

        {songs.length ? (
          songs.map((song, i) => {
            return (
              <Song key={i} song={song} handleSongClick={handleSongClick} />
            );
          })
        ) : (
          <UploadButton>
            <label htmlFor="input-file">
              <Upload className="upload main" /> Upload Song(s)
            </label>
            <input
              id="input-file"
              type="file"
              accept="audio/*"
              multiple
              onChange={(event) => handleUpload(event, handleSongs)}
            />
          </UploadButton>
        )}
      </PlaylistStyle>
    </PlaylistWrapperStyle>
  );
}

export default Playlist;
