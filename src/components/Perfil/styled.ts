import styled from 'styled-components'

export const PerfilContainer = styled.div`
    align-items: center;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: max-content;

    &:hover {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.baixa};
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
