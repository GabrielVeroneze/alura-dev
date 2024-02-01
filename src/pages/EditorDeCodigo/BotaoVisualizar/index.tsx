import { Botao } from './styled'

interface BotaoVisualizarProps {
    aplicarHighlight: () => void
}

const BotaoVisualizar = ({ aplicarHighlight }: BotaoVisualizarProps) => {
    return (
        <Botao onClick={() => aplicarHighlight()}>
            Visualizar com o highlight
        </Botao>
    )
}

export default BotaoVisualizar
