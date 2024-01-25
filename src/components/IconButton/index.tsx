import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Botao } from './styled'

interface IconButtonProps {
    icone: IconDefinition
    onClick?: () => void
}

const IconButton = ({ icone, onClick }: IconButtonProps) => {
    return (
        <Botao onClick={onClick}>
            <FontAwesomeIcon icon={icone} />
        </Botao>
    )
}

export default IconButton
