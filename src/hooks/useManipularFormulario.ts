import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { getProjetoDefault } from '@/utils/projetoDefault'

export const useManipularFormulario = () => {
    const { projetoAtual, setProjetoAtual } = useProjetoAtual()
    const { cadastrarProjeto, editarProjeto } = useManipularProjetos()

    const handleDadosChange = (campo: 'nome' | 'descricao' | 'codigo', valor: string) => {
        setProjetoAtual({
            ...projetoAtual,
            [campo]: valor,
        })
    }

    const handlePersonalizarChange = (campo: 'corFundo' | 'linguagem', valor: string) => {
        setProjetoAtual({
            ...projetoAtual,
            personalizacao: {
                ...projetoAtual.personalizacao,
                [campo]: valor,
            }
        })
    }

    const handleFormularioSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (projetoAtual.id) {
            editarProjeto(projetoAtual)
        } else {
            const novoProjeto = {
                ...projetoAtual,
                id: self.crypto.randomUUID(),
            }

            cadastrarProjeto(novoProjeto)
        }

        setProjetoAtual(getProjetoDefault())
    }

    return {
        handleDadosChange,
        handlePersonalizarChange,
        handleFormularioSubmit,
    }
}
