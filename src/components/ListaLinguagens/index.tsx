import { useLinguagemHighlight } from '@/hooks/useLinguagemHighlight'
import { Opcao, Select } from './styled'

const ListaLinguagens = () => {
    const { linguagemSelecionada, setLinguagemSelecionada, listaLinguagens } = useLinguagemHighlight()

    return (
        <Select
            value={linguagemSelecionada}
            onChange={evento => setLinguagemSelecionada(evento.target.value)}
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
