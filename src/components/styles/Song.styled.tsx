import styled from "styled-components";

interface Props {
    $bgcolor: string
}

export const SongStyles = styled.div<Props>`
    background-color: ${p => p.$bgcolor};
    padding: 1rem;
    display: flex;
    gap: 1rem;
    min-width: 17rem;
`;

export const CoverStyles = styled.div`
    flex: 1;
    img {
        width: 90%;
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
        color: #555;
    }
`;