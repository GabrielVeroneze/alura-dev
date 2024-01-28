import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Lista, Nav } from './styled'
import ItemMenu from './ItemMenu'

const Navegacao = () => {
    return (
        <Nav>
            <Lista>
                <ItemMenu icone={faCode} to="/">
                    Editor de código
                </ItemMenu>
                <ItemMenu icone={faUsers} to="/comunidade">
                    Comunidade
                </ItemMenu>
            </Lista>
        </Nav>
    )
}

export default Navegacao
