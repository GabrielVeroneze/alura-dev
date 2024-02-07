import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Projetos = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(578px, max-content));

    @media ${device.md} {
        grid-template-rows: repeat(auto-fill, minmax(518px, max-content));
    }

    @media ${device.xl} {
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto-fill, minmax(464px, max-content));
    }
`
