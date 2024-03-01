import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const SecaoEditor = styled.section`
    align-items: start;
    display: grid;
    gap: 2rem;
    grid-template-areas:
        'editor'
        'botao'
        'formulario'
        'exportar';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);

    @media ${device.xl} {
        gap: 2rem 2.5rem;
        grid-template-areas:
            'editor formulario'
            'botao formulario'
            '. exportar';
        grid-template-columns: 1fr calc(312px - 2.5rem);
        grid-template-rows: max-content 1fr;
    }
`
