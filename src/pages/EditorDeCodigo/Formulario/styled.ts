import { StyledTextField } from '@/styles/CommonStyles'
import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    grid-area: formulario;
    margin-top: 0.5rem;
`

export const CampoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
`

export const InputDescricao = styled(StyledTextField).attrs({
    as: 'textarea',
})`
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    height: 80px;
    resize: none;
`

export const Select = styled(StyledTextField).attrs({
    as: 'select',
})`
    color: ${({ theme }) =>
        theme.cores.texto.primaria + theme.cores.transparencia.significativa};
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    height: 56px;
`

export const Opcao = styled.option`
    background-color: #2d415b;
`
