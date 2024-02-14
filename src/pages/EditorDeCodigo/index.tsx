import { ToastContainer } from 'react-toastify'
import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { SecaoEditor } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'
import 'react-toastify/dist/ReactToastify.css'

const EditorDeCodigo = () => {
    const { projetoAtual } = useProjetoAtual()
    const { codigoRef, aplicarHighlight } = useAplicarHighlight()

    return (
        <SecaoEditor>
            <CampoCodigo
                modo="editar"
                personalizacao={projetoAtual.personalizacao}
                codigo={projetoAtual.codigo}
                referencia={codigoRef}
            />
            <BotaoVisualizar aplicarHighlight={aplicarHighlight} />
            <Formulario />
            <ToastContainer />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
