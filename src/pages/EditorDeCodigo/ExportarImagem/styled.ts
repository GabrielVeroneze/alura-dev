import styled from 'styled-components'

export const ExportarWrapper = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    border: 1px solid #ffffff;
    border-radius: 0.5rem;
    display: flex;
    height: 56px;
    width: 100%;
`

export const BotaoConverter = styled.button`
    border-right: 1px solid #ffffff;
    color: ${({ theme }) => theme.cores.texto.primaria};
    flex-grow: 1;
    padding: 1rem;
`

export const FormatosImagens = styled.select`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.cores.texto.primaria};
    cursor: pointer;
    font-family: inherit;
    height: 56px;
    outline: none;
    margin: 0 0.5rem;
`

export const Formato = styled.option`
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
`
