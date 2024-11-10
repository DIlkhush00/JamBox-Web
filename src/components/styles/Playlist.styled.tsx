import styled from "styled-components";

export const PlaylistWrapperStyle = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem;
`;

export const PlaylistStyle = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 2rem;
  max-width: 25rem; /* Adjust the Playlist Width */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-radius: var(--border-radius);
  box-shadow: rgb(28, 31, 32) 0px 8px 24px;
`;