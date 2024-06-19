import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./Variables";

export const Global = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 16px;
        --header-height: 8rem;

        @media (min-width: 768px) {
            
        }

        @media (min-width: 1024px) {
            font-size: 18px;
        }
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.bodyFont};
        color: ${colors.dark};
        font-size: 16px;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
        background-color: ${colors.bgBody};
    }

    h1, h2, h3, h4 {
        font-family: ${fonts.headFont};
        font-weight: 600;
        /* text-shadow: 1px 1px 2px rgba(30,13,8,0.44); */
    }

    a {
        text-decoration: none;
        transition: .4s;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;
