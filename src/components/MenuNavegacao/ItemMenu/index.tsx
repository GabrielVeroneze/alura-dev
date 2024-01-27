import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icone, NavLink, Texto } from './styled'

interface ItemMenuProps {
    children: React.ReactNode
    icone: IconDefinition
    to: string
}

const ItemMenu = ({ children, icone, to }: ItemMenuProps) => {
    return (
        <li>
            <NavLink to={to}>
                <Icone>
                    <FontAwesomeIcon icon={icone} />
                </Icone>
                <Texto>{children}</Texto>
            </NavLink>
        </li>
    )
}

export default ItemMenu
