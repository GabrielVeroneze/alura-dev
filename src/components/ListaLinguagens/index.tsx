import { usePersonalizarEditor } from '@/hooks/usePersonalizarEditor'
import { Opcao, Select } from './styled'
import listaLinguagens from '@/json/listaLinguagens.json'

const ListaLinguagens = () => {
    const { personalizacao, setPersonalizacao } = usePersonalizarEditor()

    return (
        <Select
            value={personalizacao.linguagem}
            onChange={evento =>
                setPersonalizacao({
                    ...personalizacao,
                    linguagem: evento.target.value,
                })
            }
        >
            {listaLinguagens.map(linguagem => (
                <Opcao key={linguagem.valor} value={linguagem.valor}>
                    {linguagem.nome}
                </Opcao>
            ))}
        </Select>
    )
}

export default ListaLinguagens
