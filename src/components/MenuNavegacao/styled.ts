import styled from 'styled-components'

export const Menu = styled.section`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria + theme.cores.transparencia.moderada};
    border-radius: 0.5rem;
    height: 571px;
    padding: 1.5rem;
    position: absolute;
    right: 16px;
    top: 80px;
    width: 254px;

    hr {
        background-color: ${({ theme }) => theme.cores.fundo.secundaria};
        margin: 1.5rem 0;
        opacity: 0.08;
    }
`

export const Navegacao = styled.nav`
    display: flex;
    flex-direction: column;
`

export const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
