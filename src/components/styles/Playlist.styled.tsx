import styled from "styled-components";

export const PlaylistWrapperStyle = styled.div`
  position: relative;
  flex: 2;
  padding: 2rem;

`;

export const PlaylistStyle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 25rem; /* Adjust the Playlist Width */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
`;