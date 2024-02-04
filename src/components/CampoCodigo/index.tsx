import { usePersonalizarEditor } from '@/hooks/usePersonalizarEditor'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    editorRef: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ editorRef }: CampoCodigoProps) => {
    const { personalizacao } = usePersonalizarEditor()

    return (
        <CorDeFundo
            style={{
                backgroundColor: personalizacao.corDeFundo,
            }}
        >
            <CaixaDeTexto>
                <Editor
                    aria-label="Editor de código"
                    className={personalizacao.linguagem}
                    ref={editorRef}
                    contentEditable={true}
                ></Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
