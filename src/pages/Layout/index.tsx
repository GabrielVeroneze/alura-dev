import { Outlet } from 'react-router-dom'
import { Principal } from './styled'
import Cabecalho from '@/components/Cabecalho'
import Menu from '@/components/Menu'

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Principal>
                <Menu />
                <Outlet />
            </Principal>
        </>
    )
}

export default Layout
