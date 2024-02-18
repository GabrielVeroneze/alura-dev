import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'
import TituloSidebar from '@/components/TituloSidebar'

export const MenuAbsoluto = styled.aside`
    background-color: #2d415b;
    border-radius: 0.5rem;
    height: 571px;
    padding: 1.5rem;
    position: absolute;
    right: 16px;
    top: 96px;
    width: 254px;
    z-index: 99;

    hr {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria};
        margin: 1.5rem 0;
        opacity: 0.08;
    }

    @media ${device.md} {
        right: 32px;
        top: 112px;
    }

    @media ${device.xl} {
        display: none;
    }
`

export const MenuSidebar = styled.aside`
    display: none;

    @media ${device.xl} {
        display: block;
    }
`

export const TituloMenu = styled(TituloSidebar)`
    margin-bottom: 1rem;
`
