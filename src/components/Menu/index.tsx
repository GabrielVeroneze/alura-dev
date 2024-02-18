import { useMenuAberto } from '@/hooks/useMenuAberto'
import { MenuAbsoluto, MenuSidebar, TituloMenu } from './styled'
import Navegacao from '@/components/Navegacao'
import Perfil from '@/components/Perfil'

const Menu = () => {
    const { menuAberto } = useMenuAberto()

    return (
        <>
            {menuAberto && (
                <MenuAbsoluto>
                    <Navegacao />
                    <hr />
                    <Perfil tamanho="medium" />
                </MenuAbsoluto>
            )}
            <MenuSidebar>
                <TituloMenu>Menu</TituloMenu>
                <Navegacao />
            </MenuSidebar>
        </>
    )
}

export default Menu
