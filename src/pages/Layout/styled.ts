import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Principal = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.paddings.lateral.pequeno} 2.5rem;

    @media ${device.md} {
        margin: 0 ${({ theme }) => theme.paddings.lateral.medio} 2.5rem;
    }

    @media ${device.xl} {
        grid-template-columns: 312px 1fr;
    }
`
