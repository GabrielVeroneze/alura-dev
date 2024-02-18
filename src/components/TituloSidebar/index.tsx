import { Titulo } from './styled'

interface TituloSidebarProps {
    className?: string
    children: string
}

const TituloSidebar = ({ className, children }: TituloSidebarProps) => {
    return (
        <Titulo className={className}>{children}</Titulo>
    )
}

export default TituloSidebar
