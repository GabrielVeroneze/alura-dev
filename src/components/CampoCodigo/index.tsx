import { useState } from 'react'
import { useManipularFormulario } from '@/hooks/useManipularFormulario'
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
    const [conteudo] = useState(codigo)

    return (
        <CorDeFundo $background={personalizacao.corFundo} $modo={modo}>
            <CaixaDeTexto $modo={modo}>
                <Editor
                    $modo={modo}
                    aria-label="Editor de código"
                    className={personalizacao.linguagem}
                    ref={referencia}
                    contentEditable={modo === 'editar'}
                    onInput={(evento: React.ChangeEvent<HTMLElement>) =>
                        handleDadosChange('codigo', evento.target.innerText)
                    }
                    suppressContentEditableWarning={true}
                >
                    {conteudo}
                </Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
