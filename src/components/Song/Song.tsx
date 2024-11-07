import { SongStyles } from "../styles/Song.styled";

interface Props {
  index: number,
  color: string,
}

const Song = ({index, color} : Props) => {
  return <SongStyles $bgcolor={color} >Song {index}</SongStyles>;
}

export default Song;
