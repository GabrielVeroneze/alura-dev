import { useMenuAberto } from '@/hooks/useMenuAberto'
import { Lista, Menu, Navegacao } from './styled'
import Perfil from '@/components/Perfil'

const MenuNavegacao = () => {
    const { menuAberto } = useMenuAberto()

    return (
        menuAberto && (
            <Menu>
                <hr />
                <Perfil />
            </Menu>
        )
    )
}

export default MenuNavegacao
