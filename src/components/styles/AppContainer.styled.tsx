import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    /* background-image: url('https://picsum.photos/1600/900.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    background: var(--bg-color);

    @media (max-width: 865px) {
        flex-direction: column-reverse;
        height: 100%;
        gap: 4rem;
        padding-top: 10%;
    }
`;