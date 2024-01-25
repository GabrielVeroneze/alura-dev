import { StyledIconButton } from '@/styles/CommonStyles'
import styled from 'styled-components'

export const Botao = styled(StyledIconButton)`
    background-color: ${({ theme }) => theme.cores.primaria + '00'};

    &:hover {
        background-color: ${({ theme }) => theme.cores.primaria + '14'};
    }

    &:focus {
        background-color: ${({ theme }) => theme.cores.primaria + '29'};
    }
`
