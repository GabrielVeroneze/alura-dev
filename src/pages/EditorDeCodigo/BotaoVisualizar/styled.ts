import styled from 'styled-components'

export const Botao = styled.button`
    background-color: ${({ theme }) =>
        theme.cores.primaria + theme.cores.transparencia.baixa};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 100%;

    &:hover {
        background-color: ${({ theme }) =>
            theme.cores.primaria + theme.cores.transparencia.moderada};
    }

    &:active {
        box-shadow: 0px 0px 0px 4px
            ${({ theme }) =>
                theme.cores.primaria + theme.cores.transparencia.consideravel};
    }

    &:focus {
        background-color: ${({ theme }) =>
            theme.cores.primaria + theme.cores.transparencia.consideravel};
    }
`
