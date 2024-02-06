import { StyledReactButton } from '@/styles/CommonStyles'
import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${({ theme }) => '#000000' + theme.cores.transparencia.moderada};
    border-radius: 0.5rem;
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Titulo = styled.h3`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.grande};
    font-weight: 700;
    line-height: 2rem;
`

export const Descricao = styled.p`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
    opacity: 0.8;
`

export const Acoes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content) 1fr;

    :last-child {
        justify-self: self-end;
    }
`

export const Botao = styled(StyledReactButton)`
    font-size: 1.5rem;
`

export const Quantidade = styled.p`
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
`
