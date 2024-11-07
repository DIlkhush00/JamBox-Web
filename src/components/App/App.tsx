import React from "react";
import Playlist from "../Playlist";
import Player from "../Player";
import { GlobalStyles } from "../styles/Global.styled";
import { AppContainer } from "../styles/AppContainer.styled";

function App () {
  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <Playlist />
        <Player />
      </AppContainer>
    </>

  )
}

export default App;