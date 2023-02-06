import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: PoppinsLatin-Regular !important;
        background-color: #f6f6f6 !important;
    }

    main {
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* min-height: 100vh; */
    }
`;

export default GlobalStyles;
