import { PlayerStyle } from "../styles/Player.styled";
import styled from "styled-components";
import { SongObj } from "../utils/interfaces";
import { CoverStyles, SongInfoStyles } from "../styles/Song.styled";
import AudioPlayer from "../AudioPlayer";

const Card = styled.div`
  max-width: 75%;
  max-height: 90%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: rgb(28, 31, 32) 0px 8px 24px;
  border-radius: var(--border-radius);

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
          <img src={song?.coverImage} alt={`${song?.title ?? ''} song cover`}/>
        </CoverStyles>
        <SongInfoStyles>
          <h3>{song?.title}</h3>
          <p>{song?.artist}</p>
        </SongInfoStyles>
        <AudioPlayer audioFileURL={song?.audio} />
      </Card>
    </PlayerStyle>
  );
}

export default Player;
