import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const PerfilContainer = styled.div`
    align-items: center;
    display: none;
    gap: 0.5rem;
    justify-self: end;
    padding: 0.75rem;

    @media ${device.xl} {
        display: flex;
    }
`

export const Imagem = styled.img`
    border-radius: 50%;
    height: 32px;
    width: 32px;
`

export const Nome = styled.p`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
`
