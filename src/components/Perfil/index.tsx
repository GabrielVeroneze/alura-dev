import { Imagem, Nome, PerfilContainer } from './styled'
import foto from '@/assets/images/foto.jpg'

interface PerfilProps {
    tamanho: 'medium' | 'small'
}

const Perfil = ({ tamanho }: PerfilProps) => {
    return (
        <PerfilContainer $tamanho={tamanho}>
            <Imagem
                $tamanho={tamanho}
                src={foto}
                alt="Imagem de perfil do usuário"
            />
            <Nome>Harry</Nome>
        </PerfilContainer>
    )
}

export default Perfil
