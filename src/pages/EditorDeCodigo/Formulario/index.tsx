import { useState } from 'react'
import { CampoWrapper, Form, Input, InputCor, InputDescricao } from './styled'
import TituloSidebar from '@/components/TituloSidebar'
import Botao from '@/components/Botao'

const Formulario = () => {
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [corSintaxe, setCorSintaxe] = useState<string>('#6BD1FF')

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <CampoWrapper>
                <TituloSidebar>Seu projeto</TituloSidebar>
                <Input
                    type="text"
                    placeholder="Nome do seu projeto"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                />
                <InputDescricao
                    type="text"
                    placeholder="Descrição do seu projeto"
                    value={descricao}
                    onChange={evento => setDescricao(evento.target.value)}
                />
            </CampoWrapper>
            <CampoWrapper>
                <TituloSidebar>Personalização</TituloSidebar>
                <InputCor
                    type="color"
                    value={corSintaxe}
                    onChange={evento => setCorSintaxe(evento.target.value)}
                />
            </CampoWrapper>
            <Botao type="submit">Salvar projeto</Botao>
        </Form>
    )
}

export default Formulario
