import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.cores.fundo.primaria};
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
        outline: none;
    }

    *::-webkit-scrollbar {
        height: 8px;
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.baixa};
    }

    *::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.moderada};
        border-radius: 0.625rem;
    }

    *::-webkit-scrollbar-thumb:hover{
        background: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.significativa};
    }

    *::-webkit-scrollbar-thumb:active{
        background: ${({ theme }) => theme.cores.primaria};
    }
`

export default GlobalStyles
