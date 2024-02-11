import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { useCurtirProjeto } from '@/hooks/useCurtirProjeto'
import { IProjeto } from '@/interfaces/IProjeto'
import { Acoes, Botao, Card, Conteudo, Descricao, Info, Quantidade, Titulo } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import Perfil from '@/components/Perfil'

interface CardProjetoProps {
    projeto: IProjeto
}

const CardProjeto = ({ projeto }: CardProjetoProps) => {
    const { codigoRef, aplicarHighlight } = useAplicarHighlight()
    const { curtirProjeto } = useCurtirProjeto()

    useLayoutEffect(() => {
        aplicarHighlight()
    }, [aplicarHighlight])

    return (
        <Card>
            <Link to={`/editar/${projeto.id}`}>
                <CampoCodigo
                    modo="visualizar"
                    codigo={projeto.codigo}
                    personalizacao={projeto.personalizacao}
                    referencia={codigoRef}
                />
            </Link>
            <Conteudo>
                <Info>
                    <Titulo>{projeto.nome}</Titulo>
                    <Descricao>{projeto.descricao}</Descricao>
                </Info>
                <Acoes>
                    <Botao>
                        <FontAwesomeIcon icon={faComment} />
                        <Quantidade>
                            {projeto.comentarios.quantidade}
                        </Quantidade>
                    </Botao>
                    <Botao
                        $curtido={projeto.curtidas.curtido}
                        onClick={() => curtirProjeto(projeto)}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <Quantidade>
                            {projeto.curtidas.quantidade}
                        </Quantidade>
                    </Botao>
                    <Perfil tamanho="small" />
                </Acoes>
            </Conteudo>
        </Card>
    )
}

export default CardProjeto
