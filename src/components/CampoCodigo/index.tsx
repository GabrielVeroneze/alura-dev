import { useManipularFormulario } from '@/hooks/useManipularFormulario'
import { useCodigoEmImagem } from '@/hooks/useCodigoEmImagem'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

interface CampoCodigoProps {
    modo: 'editar' | 'visualizar'
    codigo?: string
    personalizacao: IPersonalizarEditor
    referencia?: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ modo, codigo, personalizacao, referencia }: CampoCodigoProps) => {
    const { handleDadosChange } = useManipularFormulario()
    const { projetoRef } = useCodigoEmImagem()

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
                    ref={referencia}
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
