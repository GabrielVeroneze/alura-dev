import { useLinguagemHighlight } from '@/hooks/useLinguagemHighlight'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    editorRef: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ editorRef }: CampoCodigoProps) => {
    const { linguagemSelecionada } = useLinguagemHighlight()

    return (
        <CorDeFundo
            style={{
                backgroundColor: '#6BD1FF',
            }}
        >
            <CaixaDeTexto>
                <Editor
                    aria-label="Editor de código"
                    className={linguagemSelecionada}
                    ref={editorRef}
                    contentEditable={true}
                ></Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
