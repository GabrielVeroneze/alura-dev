import { StyledTextField } from '@/styles/CommonStyles'
import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    grid-area: formulario;
    margin-top: 0.5rem;

    @media ${device.xl} {
        margin-top: 0;
    }
`

export const CampoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media ${device.md} {
        &:last-of-type {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, max-content);
            grid-template-areas:
                'titulo titulo'
                'select inputCor';
        }
    }

    @media ${device.xl} {
        &:last-of-type {
            display: flex;
        }
    }
`

export const Input = styled(StyledTextField)``

export const InputCor = styled.input`
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 0.5rem;
    height: 56px;
    padding: 0.5rem;
    width: 100%;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
        border-radius: 0.25rem;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${device.md} {
        grid-area: inputCor;
    }
`

export const InputDescricao = styled(StyledTextField).attrs({
    as: 'textarea',
})`
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    height: 80px;
    resize: none;
`
