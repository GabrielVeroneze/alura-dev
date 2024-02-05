import { useRef } from 'react'
import { usePersonalizarEditor } from '@/hooks/usePersonalizarEditor'
import { SecaoEditor } from './styled'
import 'highlight.js/styles/tokyo-night-dark.css'
import hljs from 'highlight.js'
import CampoCodigo from '@/components/CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'

const EditorDeCodigo = () => {
    const { personalizacao } = usePersonalizarEditor()
    const editorRef = useRef<HTMLElement>(null)

    const aplicarHighlight = () => {
        if (editorRef.current) {
            hljs.highlightElement(editorRef.current)
        }
    }

    return (
        <SecaoEditor>
            <CampoCodigo
                modo='editar'
                personalizacao={personalizacao}
                referencia={editorRef}
            />
            <BotaoVisualizar aplicarHighlight={aplicarHighlight} />
            <Formulario />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
