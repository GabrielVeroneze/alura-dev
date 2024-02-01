import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    editorRef: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ editorRef }: CampoCodigoProps) => {
    return (
        <CorDeFundo
            style={{
                backgroundColor: '#6BD1FF',
            }}
        >
            <CaixaDeTexto>
                <Editor
                    aria-label="Editor de código"
                    className={`javascript`}
                    ref={editorRef}
                    contentEditable={true}
                ></Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
