import styled from 'styled-components'

export const Titulo = styled.h2`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
    letter-spacing: 0.3rem;
    line-height: 1.125rem;
    text-transform: uppercase;
`
