import { BotaoConverter, ExportarWrapper, Formato, FormatosImagens } from './styled'

const ExportarImagem = () => {
    return (
        <ExportarWrapper>
            <BotaoConverter>
                Converter para imagem
            </BotaoConverter>
            <FormatosImagens>
                <Formato value="png">png</Formato>
                <Formato value="jpg">jpg</Formato>
                <Formato value="svg">svg</Formato>
            </FormatosImagens>
        </ExportarWrapper>
    )
}

export default ExportarImagem
