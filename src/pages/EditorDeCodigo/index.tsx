import { ToastContainer } from 'react-toastify'
import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { useCodigoEmImagem } from '@/hooks/useCodigoEmImagem'
import { SecaoEditor } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'
import ExportarImagem from './ExportarImagem'
import 'react-toastify/dist/ReactToastify.css'

const EditorDeCodigo = () => {
    const { projetoAtual } = useProjetoAtual()
    const { codigoRef, aplicarHighlight } = useAplicarHighlight()
    const { projetoRef } = useCodigoEmImagem()

    return (
        <SecaoEditor>
            <CampoCodigo
                modo="editar"
                personalizacao={projetoAtual.personalizacao}
                codigo={projetoAtual.codigo}
                codigoRef={codigoRef}
                projetoRef={projetoRef}
            />
            <BotaoVisualizar aplicarHighlight={aplicarHighlight} />
            <Formulario />
            <ExportarImagem />
            <ToastContainer />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
