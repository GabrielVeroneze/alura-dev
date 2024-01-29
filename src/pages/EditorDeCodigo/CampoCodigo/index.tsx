import { CaixaDeTexto, CorDeFundo, Editor } from './styled'

const CampoCodigo = () => {
    return (
        <CorDeFundo
            style={{
                backgroundColor: '#6BD1FF',
            }}
        >
            <CaixaDeTexto>
                <Editor></Editor>
            </CaixaDeTexto>
        </CorDeFundo>
    )
}

export default CampoCodigo
