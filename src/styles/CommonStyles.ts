import { device } from './Breakpoints'
import styled from 'styled-components'

export const StyledIconButton = styled.button`
    border-radius: 16px;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 20px;
    height: 48px;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 48px;

    @media ${device.md} {
        font-size: 24px;
    }
`

export const StyledTextField = styled.input`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.moderada};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
    outline: unset;
    padding: 1rem 0.875rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.cores.texto.primaria + theme.cores.transparencia.significativa};
    }

    &:hover {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.consideravel};
    }
`

export const StyledReactButton = styled.button`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.nenhum};
    border-radius: 1rem;
    color: ${({ theme }) => theme.cores.texto.primaria};
    display: flex;
    gap: 0.5rem;
    height: 40px;
    padding: 0.5rem;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    width: 58px;

    &:hover {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.baixa};
    }

    &:active {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.moderada};
    }
`
