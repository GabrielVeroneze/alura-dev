import { NavLink as BaseNavLink } from 'react-router-dom'
import { StyledIconButton } from '@/styles/CommonStyles'
import styled from 'styled-components'

export const NavLink = styled(BaseNavLink)`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    opacity: 0.56;
    text-decoration: none;

    &:hover {
        opacity: 0.72;

        button {
            background-color: ${({ theme }) =>
                theme.cores.primaria + theme.cores.transparencia.significativa};
        }
    }

    &.active {
        opacity: 1;

        button {
            background-color: ${({ theme }) => theme.cores.primaria};
        }
    }
`

export const Icone = styled(StyledIconButton)`
    background-color: ${({ theme }) =>
        theme.cores.primaria + theme.cores.transparencia.moderada};
`

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 1rem;
    line-height: 1.5rem;
`
