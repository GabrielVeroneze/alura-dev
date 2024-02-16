import styled from 'styled-components'

export const ExportarWrapper = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.baixa};
    border-radius: 0.5rem;
    display: flex;
    grid-area: exportar;
    height: 56px;
    width: 100%;
`

export const BotaoConverter = styled.button`
    border-right: 1px solid ${({ theme }) => theme.cores.fundo.primaria};
    color: ${({ theme }) => theme.cores.texto.primaria};
    flex-grow: 1;
    padding: 1rem;
    text-wrap: nowrap;
    transition-duration: 300ms;
    transition-timing-function: ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.moderada};
    }

    &:active {
        background-color: ${({ theme }) => theme.cores.primaria + theme.cores.transparencia.consideravel};
    }
`

export const FormatosImagens = styled.select`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.cores.texto.primaria};
    cursor: pointer;
    font-family: inherit;
    height: 56px;
    margin: 0 0.5rem;
    outline: none;
    text-transform: uppercase;
`

export const Formato = styled.option`
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
`
