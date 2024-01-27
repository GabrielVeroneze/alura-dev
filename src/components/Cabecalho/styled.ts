import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Header = styled.header`
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr max-content max-content;
    height: 56px;
    margin: 1rem ${({ theme }) => theme.paddings.lateral.pequeno} 2.5rem;

    @media ${device.md} {
        gap: 2.5rem;
        grid-template-columns: max-content 1fr max-content;
        margin: 2rem ${({ theme }) => theme.paddings.lateral.medio} 2.5rem;
    }

    @media ${device.xl} {
        gap: 0;
        grid-template-columns: 312px 1fr 312px;
    }
`

export const MenuIcone = styled.span`
    width: max-content;

    @media ${device.xl} {
        display: none;
    }
`

export const MenuPerfil = styled.div`
    display: none;
    justify-self: end;

    @media ${device.xl} {
        display: block;
    }
`
