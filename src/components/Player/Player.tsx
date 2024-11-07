import { PlayerStyle } from "../styles/Player.styled";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 580px;
  background-color: teal;
  padding: 20px;
  text-align: center;
  line-height: 540px;
`;

function Player() {
  return (
    <PlayerStyle>
      <Card>
        Player
      </Card>
    </PlayerStyle>
  );
}

export default Player;
