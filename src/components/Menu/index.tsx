import { useEffect } from 'react'
import { useMenuAberto } from '@/hooks/useMenuAberto'
import { MenuSidebar, WrapperPerfil, WrapperTitulo } from './styled'
import TituloSidebar from '@/components/TituloSidebar'
import Navegacao from '@/components/Navegacao'
import Perfil from '@/components/Perfil'

const Menu = () => {
    const { menuAberto, setMenuAberto } = useMenuAberto()

    useEffect(() => {
        if (window.innerWidth >= 1440) {
            setMenuAberto(true)
        }
    }, [setMenuAberto])

    return (
        menuAberto && (
            <MenuSidebar>
                <WrapperTitulo>
                    <TituloSidebar>Menu</TituloSidebar>
                </WrapperTitulo>
                <Navegacao />
                <hr />
                <WrapperPerfil>
                    <Perfil />
                </WrapperPerfil>
            </MenuSidebar>
        )
    )
}

export default Menu
