import { useRef } from 'react'
import { SecaoEditor } from './styled'
import 'highlight.js/styles/tokyo-night-dark.css'
import hljs from 'highlight.js'
import CampoCodigo from './CampoCodigo'
import BotaoVisualizar from './BotaoVisualizar'
import Formulario from './Formulario'

const EditorDeCodigo = () => {
    const editorRef = useRef<HTMLElement>(null)

    const aplicarHighlight = () => {
        if (editorRef.current) {
            hljs.highlightElement(editorRef.current)
        }
    }

    return (
        <SecaoEditor>
            <CampoCodigo editorRef={editorRef} />
            <BotaoVisualizar aplicarHighlight={aplicarHighlight} />
            <Formulario />
        </SecaoEditor>
    )
}

export default EditorDeCodigo
