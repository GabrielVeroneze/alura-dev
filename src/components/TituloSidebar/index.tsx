import { Titulo } from './styled'

interface TituloSidebarProps {
    children: string
}

const TituloSidebar = ({ children }: TituloSidebarProps) => {
    return (
        <Titulo>{children}</Titulo>
    )
}

export default TituloSidebar
