import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useMenuAberto } from '@/hooks/useMenuAberto'
import { Lista, Menu, Navegacao } from './styled'
import Perfil from '@/components/Perfil'
import ItemMenu from './ItemMenu'

const MenuNavegacao = () => {
    const { menuAberto } = useMenuAberto()

    return (
        menuAberto && (
            <Menu>
                <Navegacao>
                    <Lista>
                        <ItemMenu icone={faCode} to="/">
                            Editor de código
                        </ItemMenu>
                        <ItemMenu icone={faUsers} to="/comunidade">
                            Comunidade
                        </ItemMenu>
                    </Lista>
                </Navegacao>
                <hr />
                <Perfil />
            </Menu>
        )
    )
}

export default MenuNavegacao
