import { device } from '@/styles/Breakpoints'
import styled, { css } from 'styled-components'

export const MenuSidebar = styled.aside`
    ${() => MenuAbsoluto}

    @media ${device.xl} {
        ${() => MenuEstatico}
    }
`

export const MenuAbsoluto = css`
    background-color: #2D415B;
    border-radius: 0.5rem;
    height: 571px;
    padding: 1.5rem;
    position: absolute;
    right: 16px;
    top: 96px;
    width: 254px;

    hr {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria};
        margin: 1.5rem 0;
        opacity: 0.08;
    }

    @media ${device.md} {
        right: 32px;
        top: 112px;
    }
`

export const MenuEstatico = css`
    background-color: transparent;
    padding: 0;
    position: static;

    hr {
        display: none;
    }
`

export const WrapperPerfil = styled.div`
    @media ${device.xl} {
        display: none;
    }
`

export const WrapperTitulo = styled.div`
    display: none;

    @media ${device.xl} {
        display: block;
        margin-bottom: 1rem;
    }
`
