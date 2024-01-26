import { StyledIconButton } from '@/styles/CommonStyles'
import styled from 'styled-components'

export const Botao = styled(StyledIconButton)`
    background-color: ${({ theme }) =>
        theme.cores.primaria + theme.cores.transparencia.nenhum};

    &:hover {
        background-color: ${({ theme }) =>
            theme.cores.primaria + theme.cores.transparencia.baixa};
    }

    &:focus {
        background-color: ${({ theme }) =>
            theme.cores.primaria + theme.cores.transparencia.moderada};
    }
`
