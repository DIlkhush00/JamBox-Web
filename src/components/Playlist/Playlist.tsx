import {
  PlaylistStyle,
  PlaylistWrapperStyle,
  UploadButton,
  PlaylistHeader,
} from "../styles/Playlist.styled";
import Song from "../Song";
import { SongObj } from "../utils/interfaces";
import { Upload } from "react-feather";
import { DefaultCoverImage } from "../../assets/Images";

const DEFAULT_ARTIST: string = "Unknown Artist";

interface Props {
  songs: SongObj[];
  currentSongId?: string;
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
        artist: DEFAULT_ARTIST,
        coverImage: DefaultCoverImage,
        duration: Math.round(audio.duration),
        audio: audioURL,
      };

      newSongsList.push(song);
      handleSongs(newSongsList);
    });
  });
};

function Playlist({
  songs,
  currentSongId,
  handleSongClick,
  handleSongs,
}: Props) {
  return (
    <PlaylistWrapperStyle>
      <PlaylistStyle>
        {songs.length > 0 && (
          <PlaylistHeader>
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
          </PlaylistHeader>
        )}

        {songs.length > 0 ? (
          songs.map((song) => {
            const active = currentSongId ? song.id === currentSongId : false;
            return (
              <Song
                active={active}
                key={song.id}
                song={song}
                handleSongClick={handleSongClick}
              />
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
