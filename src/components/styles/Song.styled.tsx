import styled from "styled-components";

interface SongStylesProps {
  $active: boolean;
}

export const SongStyles = styled.div<SongStylesProps>`
  background-color: ${(props) => props.$active ? "var(--hover-color)" : "var(--bg-color)"};
  padding: 1rem;
  display: flex;
  gap: 1rem;
  min-width: 17rem;

  &:hover {
    background-color: var(--hover-color);
  }
`;

interface CoverProps {
  $size: 'small' | 'large';
}

export const CoverStyles = styled.div<CoverProps>`
  flex: 1;
  img {
    width: 100%;
    max-width: ${(props) => props.$size === "small" ? "100px" : "300px"};
    border-radius: 10%;
    object-fit: cover;
  }
`;

export const SongInfoStyles = styled.div`
  flex: 2;

  h3 {
    font-size: 1.275rem;
    font-weight: bold;
  }

  p {
    margin-top: 4px;
  }
`;
