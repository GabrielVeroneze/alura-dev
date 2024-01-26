import styled, { css } from 'styled-components'
import { StyledTextField } from '@/styles/CommonStyles'
import { device } from '@/styles/Breakpoints'

export const CampoBusca = styled.div<{ $buscaAberta: boolean }>`
    ${({ $buscaAberta }) => $buscaAberta ? CampoBuscaAbsouluto : CampoBuscaEstatico}
`

export const CampoBuscaAbsouluto = css`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    gap: 0.5rem; 
    position: absolute;
    width: calc(100% - 2rem);
`

export const CampoBuscaEstatico = css`
    position: static;
    width: 100%;
`

export const Input = styled(StyledTextField)<{ $buscaAberta: boolean }>`
    display: ${({ $buscaAberta }) => $buscaAberta ? 'block' : 'none'};

    @media ${device.md} {
        display: block;
    }
`

export const IconeLupa = styled.span`
    display: inline-block;

    @media ${device.md} {
        display: none;
    }
`
