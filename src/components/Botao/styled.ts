import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${({ theme }) => theme.cores.primaria};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.cores.texto.secundaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    height: 56px;
    line-height: 1.5rem;
    padding: 1rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 100%;

    &:hover {
        background-color: ${({ theme }) => theme.cores.secundaria};
    }

    &:active {
        box-shadow: 0px 0px 0px 4px
            ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.alta};
    }

    &:focus {
        background-color: ${({ theme }) => theme.cores.terciaria};
    }
`
