import { ToastContainer } from 'react-toastify'
import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularFormulario } from '@/hooks/useManipularFormulario'
import { CampoWrapper, Form, Input, InputCor, InputDescricao } from './styled'
import TituloSidebar from '@/components/TituloSidebar'
import ListaLinguagens from '@/components/ListaLinguagens'
import Botao from '@/components/Botao'
import 'react-toastify/dist/ReactToastify.css'

const Formulario = () => {
    const { projetoAtual } = useProjetoAtual()
    const { handleDadosChange, handlePersonalizarChange, handleFormularioSubmit } = useManipularFormulario()

    return (
        <Form onSubmit={handleFormularioSubmit}>
            <CampoWrapper>
                <TituloSidebar>Seu projeto</TituloSidebar>
                <Input
                    required
                    type="text"
                    placeholder="Nome do seu projeto"
                    value={projetoAtual.nome}
                    onChange={evento =>
                        handleDadosChange('nome', evento.target.value)
                    }
                />
                <InputDescricao
                    required
                    type="text"
                    placeholder="Descrição do seu projeto"
                    value={projetoAtual.descricao}
                    onChange={evento =>
                        handleDadosChange('descricao', evento.target.value)
                    }
                />
            </CampoWrapper>
            <CampoWrapper>
                <TituloSidebar>Personalização</TituloSidebar>
                <ListaLinguagens />
                <InputCor
                    type="color"
                    value={projetoAtual.personalizacao.corFundo}
                    onChange={evento =>
                        handlePersonalizarChange('corFundo', evento.target.value)
                    }
                />
            </CampoWrapper>
            <Botao type="submit">Salvar projeto</Botao>
            <ToastContainer />
        </Form>
    )
}

export default Formulario
