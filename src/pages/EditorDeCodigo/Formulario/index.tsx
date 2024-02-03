import { useState } from 'react'
import { usePersonalizarEditor } from '@/hooks/usePersonalizarEditor'
import { CampoWrapper, Form, Input, InputCor, InputDescricao } from './styled'
import TituloSidebar from '@/components/TituloSidebar'
import ListaLinguagens from '@/components/ListaLinguagens'
import Botao from '@/components/Botao'

const Formulario = () => {
    const { personalizacao, setPersonalizacao } = usePersonalizarEditor()
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

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
                <ListaLinguagens />
                <InputCor
                    type="color"
                    value={personalizacao.corDeFundo}
                    onChange={evento => 
                        setPersonalizacao({
                            ...personalizacao,
                            corDeFundo: evento.target.value,
                        })
                    }
                />
            </CampoWrapper>
            <Botao type="submit">Salvar projeto</Botao>
        </Form>
    )
}

export default Formulario
