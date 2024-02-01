import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const CorDeFundo = styled.div`
    border-radius: 0.5rem;
    grid-area: editor;
    padding: 2rem;
`

export const CaixaDeTexto = styled.pre`
    background-color: #141414;
    background-image: url('images/code-buttons.svg');
    background-position: 1rem 1rem;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.24);
    color: ${({ theme }) => theme.cores.texto.primaria};
    padding: 3.25rem 1rem 1rem;
`

export const Editor = styled.code`
    background-color: transparent;
    border: none;
    display: block;
    font-family: ${({ theme }) => theme.fontes.familia.secundaria};
    font-size: 0.875rem;
    height: 360px;
    line-height: normal;
    outline: none;
    overflow: scroll;
    padding: 0;
    resize: none;
    text-wrap: wrap;
    width: 100%;

    &.hljs {
        padding: 0;
    }

    @media ${device.md} {
        height: 234px;
    }
`
