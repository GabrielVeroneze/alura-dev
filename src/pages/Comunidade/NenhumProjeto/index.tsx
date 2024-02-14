import { Link } from 'react-router-dom'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { AvisoWrapper, Icone, TextoInformativo } from './styled'

const NenhumProjeto = () => {
    return (
        <AvisoWrapper>
            <TextoInformativo>
                <strong>Nenhum projeto encontrado!</strong>
                <br />
                Clique no botão abaixo para criar um!
            </TextoInformativo>
            <Link to="/">
                <Icone icon={faSquarePlus} />
            </Link>
        </AvisoWrapper>
    )
}

export default NenhumProjeto
