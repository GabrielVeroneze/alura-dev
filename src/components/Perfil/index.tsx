import { Imagem, Nome, PerfilContainer } from './styled'
import foto from '@/assets/images/foto.jpg'

const Perfil = () => {
    return (
        <PerfilContainer>
            <Imagem src={foto} alt="Imagem de perfil do usuário" />
            <Nome>Harry</Nome>
        </PerfilContainer>
    )
}

export default Perfil
