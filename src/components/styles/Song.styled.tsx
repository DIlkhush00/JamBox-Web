import styled from "styled-components";

interface Props {
    $bgcolor: string
}

export const SongStyles = styled.div<Props>`
    width: 100%;
    height: 100px;
    background-color: ${p => p.$bgcolor};
    padding: 16px;
    text-align: center;
    line-height: 68px;
`;