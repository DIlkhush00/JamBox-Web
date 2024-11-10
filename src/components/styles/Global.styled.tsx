import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --color-text-primary: #fefdfc;
        --color-text-secondary: #ccd5d8;
        --bg-color: #1f292b;
        --border-radius: 16px;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        font-family: "Funnel Display", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        color: var(--color-text-primary);
        margin: 0;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    p {
        color: var(--color-text-secondary);
        text-wrap: pretty;
    }
    
    h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
    }

    #root, #__next {
        isolation: isolate;
    }

    button {
        border-radius: 0;
        text-align: inherit;
        background: none;
        box-shadow: none;
        padding: 0;
        border: none;
        color: inherit;
        font: inherit;
    }
`;