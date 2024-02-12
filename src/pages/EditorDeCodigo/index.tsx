import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { SecaoEditor } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'

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
        </SecaoEditor>
    )
}

export default EditorDeCodigo
