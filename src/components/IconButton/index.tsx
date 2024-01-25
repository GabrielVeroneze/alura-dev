import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Botao } from './styled'

interface IconButtonProps {
    icone: IconDefinition
}

const IconButton = ({ icone }: IconButtonProps) => {
    return (
        <Botao>
            <FontAwesomeIcon icon={icone} />
        </Botao>
    )
}

export default IconButton
