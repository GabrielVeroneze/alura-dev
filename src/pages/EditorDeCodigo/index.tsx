import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { SecaoEditor } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'

const EditorDeCodigo = () => {
    const { personalizacao } = usePersonalizarEditor()
    const { codigoRef, aplicarHighlight } = useAplicarHighlight()

    return (
        <SecaoEditor>
            <CampoCodigo
                personalizacao={personalizacao}
                modo="editar"
                referencia={codigoRef}
            />
            <BotaoVisualizar aplicarHighlight={aplicarHighlight} />
            <Formulario />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
