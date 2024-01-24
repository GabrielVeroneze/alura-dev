import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fontes.familia.primaria};
        min-height: 100vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }
`

export default GlobalStyles
