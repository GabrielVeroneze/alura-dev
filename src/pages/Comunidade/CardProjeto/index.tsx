import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { IProjeto } from '@/interfaces/IProjeto'
import { Acoes, Botao, Card, Conteudo, Descricao, Info, Quantidade, Titulo } from './styled'
import CampoCodigo from '@/components/CampoCodigo'
import Perfil from '@/components/Perfil'

const CardProjeto = ({ codigo, personalizacao, nome, descricao }: IProjeto) => {
    return (
        <Card>
            <CampoCodigo
                modo="visualizar"
                codigo={codigo}
                personalizacao={personalizacao}
            />
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
