import { PlayerStyle } from "../styles/Player.styled";
import styled from "styled-components";
import { SongObj } from "../utils/interfaces";
import { CoverStyles } from "../styles/Song.styled";
import AudioPlayer from "../AudioPlayer";

const Card = styled.div`
  max-width: 75%;
  border: 1px solid teal;
  margin: 0 auto;
  padding: 2rem;

  div {
    padding: 1rem;
  }
`;


interface Props {
  song: SongObj;
}

function Player({ song }: Props) {
  return (
    <PlayerStyle>
      <Card>
        <CoverStyles>
          <img src={song?.coverImage} alt="odoriko song cover" />
        </CoverStyles>
        <div>
          <h3>{song?.title}</h3>
          <p>{song?.artist}</p>
        </div>
        <AudioPlayer audioFileURL={song?.audio}/>
      </Card>
    </PlayerStyle>
  );
}

export default Player;
