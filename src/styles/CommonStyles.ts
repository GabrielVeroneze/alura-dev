import styled from 'styled-components'

export const StyledIconButton = styled.button`
    border-radius: 16px;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 20px;
    height: 48px;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 48px;
`

export const StyledTextField = styled.input`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.moderada};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
    opacity: 0.64;
    outline: unset;
    padding: 1rem 0.875rem;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.cores.texto.primaria};
    }
`
