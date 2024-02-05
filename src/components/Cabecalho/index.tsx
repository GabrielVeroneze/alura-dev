import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useMenuAberto } from '@/hooks/useMenuAberto'
import { Header, MenuIcone, MenuPerfil } from './styled'
import Buscador from '@/components/Buscador'
import IconButton from '@/components/IconButton'
import Perfil from '@/components/Perfil'
import logo from '@/assets/images/logotipo.svg'

const Cabecalho = () => {
    const { menuAberto, setMenuAberto } = useMenuAberto()

    const alternarMenuAberto = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <Header>
            <img src={logo} alt="Logo do Alura Dev" />
            <Buscador />
            {menuAberto ? (
                <MenuIcone>
                    <IconButton icone={faXmark} onClick={alternarMenuAberto} />
                </MenuIcone>
            ) : (
                <MenuIcone>
                    <IconButton icone={faBars} onClick={alternarMenuAberto} />
                </MenuIcone>
            )}
            <MenuPerfil>
                <Perfil tamanho="medium" />
            </MenuPerfil>
        </Header>
    )
}

export default Cabecalho
