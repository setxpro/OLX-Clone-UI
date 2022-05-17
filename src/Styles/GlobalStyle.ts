import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *,html, button, p, h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
        font-size: calc(60%-8vmin);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    // Defined scrollbar 

    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: #3333;
    }
    ::-webkit-scrollbar-thumb {
        background: #4444;
    }
`;