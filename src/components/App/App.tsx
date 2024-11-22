import { useState, useEffect } from "react";
import Playlist from "../Playlist";
import Player from "../Player";
import { GlobalStyles } from "../styles/Global.styled";
import { AppContainer } from "../styles/AppContainer.styled";
import { SongObj } from "../utils/interfaces";

function App() {
  const [songs, setSongs] = useState<SongObj[]>([]);
  const [currentSong, setCurrentSong] = useState<SongObj>({} as SongObj);

  useEffect(() => {
    setCurrentSong(songs[0]);
  }, [songs]);

  const handleSongClick = (id: string) => {
    const newSong = songs.find((song) => song.id === id);
    if(newSong)
      setCurrentSong(newSong);
    else
      console.warn(`Song with id ${id} not found`)
  };

  const handleSongs = (songsList : SongObj[]) => {
    console.log(songs)
    const newSongsList = [...songs].concat(songsList);
    setSongs(newSongsList)
  }

  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <Playlist songs={songs} handleSongClick={handleSongClick} handleSongs={handleSongs} />
        <Player song={currentSong} />
      </AppContainer>
    </>
  );
}

export default App;
