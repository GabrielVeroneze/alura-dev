import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularFormulario } from '@/hooks/useManipularFormulario'
import { Opcao, Select } from './styled'
import listaLinguagens from '@/json/listaLinguagens.json'

const ListaLinguagens = () => {
    const { projetoAtual } = useProjetoAtual()
    const { handlePersonalizarChange } = useManipularFormulario()

    return (
        <Select
            name="linguagem"
            value={projetoAtual.personalizacao.linguagem}
            onChange={evento =>
                handlePersonalizarChange('linguagem', evento.target.value)
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
