import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAplicarHighlight } from '@/hooks/useAplicarHighlight'
import { IProjeto } from '@/interfaces/IProjeto'
import { Acoes, Botao, Card, Conteudo, Descricao, Info, Quantidade, Titulo } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import Perfil from '@/components/Perfil'

const CardProjeto = ({ id, codigo, personalizacao, nome, descricao }: IProjeto) => {
    const { codigoRef, aplicarHighlight } = useAplicarHighlight()

    useLayoutEffect(() => {
        aplicarHighlight()
    }, [aplicarHighlight])

    return (
        <Card>
            <Link to={`/editar/${id}`}>
                <CampoCodigo
                    modo="visualizar"
                    codigo={codigo}
                    personalizacao={personalizacao}
                    referencia={codigoRef}
                />
            </Link>
            <Conteudo>
                <Info>
                    <Titulo>{nome}</Titulo>
                    <Descricao>{descricao}</Descricao>
                </Info>
                <Acoes>
                    <Botao>
                        <FontAwesomeIcon icon={faComment} />
                        <Quantidade>9</Quantidade>
                    </Botao>
                    <Botao>
                        <FontAwesomeIcon icon={faHeart} />
                        <Quantidade>9</Quantidade>
                    </Botao>
                    <Perfil tamanho="small" />
                </Acoes>
            </Conteudo>
        </Card>
    )
}

export default CardProjeto
