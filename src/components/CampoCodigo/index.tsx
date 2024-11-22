import { useManipularFormulario } from '@/hooks/useManipularFormulario'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    modo: 'editar' | 'visualizar'
    codigo?: string
    personalizacao: IPersonalizarEditor
    codigoRef?: React.RefObject<HTMLElement>
    projetoRef?: React.RefObject<HTMLDivElement>
}

const CampoCodigo = ({ modo, codigo, personalizacao, codigoRef, projetoRef }: CampoCodigoProps) => {
    const { handleCodigoChange } = useManipularFormulario()

    return (
        <CorDeFundo
            $background={personalizacao.corFundo}
            $modo={modo}
            ref={projetoRef}
        >
            <CaixaDeTexto $modo={modo}>
                <Editor
                    $modo={modo}
                    aria-label="Editor de código"
                    className={personalizacao.linguagem}
                    ref={codigoRef}
                    contentEditable={modo === 'editar'}
                    onBlur={evento => handleCodigoChange(evento)}
                    suppressContentEditableWarning={true}
                >
                    {codigo}
                </Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
