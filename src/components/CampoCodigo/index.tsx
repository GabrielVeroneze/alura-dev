import { useManipularFormulario } from '@/hooks/useManipularFormulario'
import { PersonalizarEditor } from '@/types/PersonalizarEditor'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    modo: 'editar' | 'visualizar'
    codigo?: string
    personalizacao: PersonalizarEditor
    codigoRef?: React.RefObject<HTMLElement>
    projetoRef?: React.RefObject<HTMLDivElement>
}

const CampoCodigo = ({ modo, codigo, personalizacao, codigoRef, projetoRef }: CampoCodigoProps) => {
    const { handleDadosChange } = useManipularFormulario()

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
                    onBlur={evento =>
                        handleDadosChange('codigo', evento.target.innerText)
                    }
                    suppressContentEditableWarning={true}
                >
                    {codigo}
                </Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
