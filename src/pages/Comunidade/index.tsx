import { useBuscarProjetos } from '@/hooks/useBuscarProjetos'
import { Projetos } from './styled'
import CardProjeto from './CardProjeto'

const Comunidade = () => {
    const { projetos } = useBuscarProjetos()

    return (
        <Projetos>
            {projetos.map(projeto => (
                <CardProjeto key={projeto.id} {...projeto} />
            ))}
        </Projetos>
    )
}

export default Comunidade
