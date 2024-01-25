import styled from 'styled-components'

export const StyledIconButton = styled.button`
    border-radius: 16px;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 20px;
    height: 48px;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    width: 48px;
`
