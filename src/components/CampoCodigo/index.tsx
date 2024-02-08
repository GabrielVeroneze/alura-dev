import { useState } from 'react'
import { CaixaDeTexto, CorDeFundo, Editor } from './styled'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'

interface CampoCodigoProps {
    modo: 'editar' | 'visualizar'
    codigo?: string
    personalizacao: IPersonalizarEditor
    referencia?: React.RefObject<HTMLElement>
}

const CampoCodigo = ({ modo, codigo, personalizacao, referencia }: CampoCodigoProps) => {
    const [conteudo, setConteudo] = useState(codigo)

    const handleChange = (evento: React.ChangeEvent<HTMLElement>) => {
        setConteudo(evento.target.innerText)
    }

    return (
        <CorDeFundo $background={personalizacao.corFundo} $modo={modo}>
            <CaixaDeTexto $modo={modo}>
                <Editor
                    $modo={modo}
                    aria-label="Editor de código"
                    className={personalizacao.linguagem}
                    ref={referencia}
                    contentEditable={modo === 'editar'}
                    onInput={handleChange}
                    suppressContentEditableWarning={true}
                >
                    {codigo}
                </Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
