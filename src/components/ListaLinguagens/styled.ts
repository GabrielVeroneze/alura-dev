import { StyledTextField } from '@/styles/CommonStyles'
import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Select = styled(StyledTextField).attrs({
    as: 'select',
})`
    color: ${({ theme }) =>
        theme.cores.texto.primaria + theme.cores.transparencia.significativa};
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    height: 56px;

    @media ${device.md} {
        grid-area: select;
    }
`

export const Opcao = styled.option`
    background-color: #2d415b;
`
