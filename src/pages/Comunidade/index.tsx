import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { Projetos } from './styled'
import Masonry from 'react-responsive-masonry'
import CardProjeto from './CardProjeto'

const Comunidade = () => {
    const { projetos } = useManipularProjetos()

    return (
        <Projetos>
            <Masonry columnsCount={2} gutter="1.5rem">
                {projetos.map(projeto => (
                    <CardProjeto key={projeto.id} projeto={projeto} />
                ))}
            </Masonry>
        </Projetos>
    )
}

export default Comunidade
