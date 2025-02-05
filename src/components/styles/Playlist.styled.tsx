import styled from "styled-components";

const PlaylistWrapperStyle = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem;
  margin: 0 auto;
`;

const PlaylistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  padding-block: 1rem;

  & > span {
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

const PlaylistStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  max-width: 25rem; /* Adjust the Playlist Width */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const UploadButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > input[type="file"] {
    display: none;
  }

  & > label {
    font-weight: 400;
    font-size: 1rem;
    padding: 8px 12px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s ease;
    outline: 0;
    user-select: none;
    background-color: var(--bg-color);
    color: var(--color-text-primary);
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > label:hover {
    background-color: var(--btn-color);
  }

  & > label > .upload.main {
    padding-right: 6px;
  }
`;

export { PlaylistWrapperStyle, PlaylistStyle, UploadButton, PlaylistHeader };
