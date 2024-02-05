import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const CorDeFundo = styled.div<{ $background: string; $modo: string }>`
    background: ${({ $background }) => $background};
    border-radius: 0.5rem;
    grid-area: editor;
    padding: ${({ $modo }) => $modo === 'editar' ? '2rem' : '1.5rem'};
`

export const CaixaDeTexto = styled.pre<{ $modo: string }>`
    background-color: #141414;
    background-image: url('images/code-buttons.svg');
    background-position: ${({ $modo }) => $modo === 'editar' ? '1rem 1rem' : '0.75rem 0.75rem'};
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.24);
    color: ${({ theme }) => theme.cores.texto.primaria};
    padding: ${({ $modo }) => $modo === 'editar' ? '3.25rem 1rem 1rem' : '2.25rem 0.75rem 0.75rem'};
`

export const Editor = styled.code<{ $modo: string }>`
    background-color: transparent;
    border: none;
    display: block;
    font-family: ${({ theme }) => theme.fontes.familia.secundaria};
    font-size: 0.875rem;
    height: ${({ $modo }) => $modo === 'editar' ? '360px' : '306px'};
    line-height: normal;
    outline: none;
    overflow-y: auto;
    padding: 0;
    resize: none;
    text-wrap: wrap;
    width: 100%;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #555555;
        border-radius: 0.625rem;
    }

    &.hljs {
        padding: 0;
    }

    @media ${device.md} {
        height: 234px;
    }
`
