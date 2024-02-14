import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const AvisoWrapper = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextoInformativo = styled.h2`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    margin-bottom: 1.125rem;
    text-align: center;

    strong {
        display: inline-block;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1.125rem;
    }

    @media ${device.xl} {
        font-size: ${({ theme }) => theme.fontes.tamanho.grande};

        strong {
            font-size: 2.75rem;
        }
    }
`

export const Icone = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 2rem;
`
