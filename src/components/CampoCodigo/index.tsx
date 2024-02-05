import { CaixaDeTexto, CorDeFundo, Editor } from './styled'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'

interface CampoCodigoProps {
    modo: 'editar' | 'visualizar'
    codigo?: string
    personalizacao: IPersonalizarEditor
    referencia?: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ modo, codigo, personalizacao, referencia }: CampoCodigoProps) => {
    return (
        <CorDeFundo $background={personalizacao.corFundo} $modo={modo}>
            <CaixaDeTexto $modo={modo}>
                <Editor
                    $modo={modo}
                    aria-label="Editor de código"
                    className={personalizacao.linguagem}
                    ref={referencia}
                    contentEditable={modo === 'editar' ? true : false}
                >
                    {codigo}
                </Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
