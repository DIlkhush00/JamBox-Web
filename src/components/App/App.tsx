import {useState, useEffect} from "react";
import Playlist from "../Playlist";
import Player from "../Player";
import { GlobalStyles } from "../styles/Global.styled";
import { AppContainer } from "../styles/AppContainer.styled";
import { SongObj } from "../utils/interfaces";

function App () {
  const [songs, setSongs] = useState<SongObj[]>([]);

  useEffect(()=>{
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setSongs(data.songs))
      .catch(error => console.error("Error loading file!", error));
  }, []);

  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <Playlist songs={songs}/>
        <Player />
      </AppContainer>
    </>

  )
}

export default App;