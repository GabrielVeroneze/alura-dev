import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { CamposDados, CamposPersonalizacao } from '@/types/Formulario'

export const useManipularFormulario = () => {
    const { projetoAtual, setProjetoAtual } = useProjetoAtual()
    const { cadastrarProjeto, editarProjeto } = useManipularProjetos(false)

    const handleDadosChange = (campo: CamposDados, valor: string) => {
        setProjetoAtual({
            ...projetoAtual,
            [campo]: valor,
        })
    }

    const handlePersonalizarChange = (campo: CamposPersonalizacao, valor: string) => {
        setProjetoAtual({
            ...projetoAtual,
            personalizacao: {
                ...projetoAtual.personalizacao,
                [campo]: valor,
            },
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
