import { SecaoEditor } from './styled'
import CampoCodigo from './CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'

const EditorDeCodigo = () => {
    return (
        <SecaoEditor>
            <CampoCodigo />
            <BotaoVisualizar />
            <Formulario />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
