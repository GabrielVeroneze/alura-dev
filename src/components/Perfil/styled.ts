import styled from 'styled-components'

export const PerfilContainer = styled.div<{ $tamanho: string }>`
    align-items: center;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.5rem;
    padding: ${({ $tamanho }) => $tamanho === 'medium' ? '0.75rem' : '0.5rem'};
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: max-content;

    &:hover {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.baixa};
    }
`

export const Imagem = styled.img<{ $tamanho: string }>`
    border-radius: 50%;
    height: ${({ $tamanho }) => $tamanho === 'medium' ? '32px' : '24px'};
    width: ${({ $tamanho }) => $tamanho === 'medium' ? '32px' : '24px'};
`

export const Nome = styled.p`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    line-height: 1.5rem;
`
