import { useState } from 'react'
import { useCodigoEmImagem } from '@/hooks/useCodigoEmImagem'
import { BotaoConverter, ExportarWrapper, Formato, FormatosImagens } from './styled'

const ExportarImagem = () => {
    const { converterCodigo } = useCodigoEmImagem()
    const [formatoSelecionado, setFormatoSelecionado] = useState<string>('png')

    return (
        <ExportarWrapper>
            <BotaoConverter onClick={() => converterCodigo(formatoSelecionado)}>
                Converter em imagem
            </BotaoConverter>
            <FormatosImagens
                onChange={evento =>
                    setFormatoSelecionado(evento.target.value)
                }
            >
                <Formato value="png">png</Formato>
                <Formato value="jpg">jpg</Formato>
                <Formato value="svg">svg</Formato>
            </FormatosImagens>
        </ExportarWrapper>
    )
}

export default ExportarImagem
