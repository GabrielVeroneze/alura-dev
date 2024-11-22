import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { getProjetoDefault } from '@/utils/projetoDefault'

export const useManipularFormulario = () => {
    const { projetoAtual, setProjetoAtual } = useProjetoAtual()
    const { cadastrarProjeto, editarProjeto } = useManipularProjetos(false)

    const handleDadosChange = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProjetoAtual({
            ...projetoAtual,
            [evento.target.name]: evento.target.value,
        })
    }

    const handlePersonalizarChange = (evento: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setProjetoAtual({
            ...projetoAtual,
            personalizacao: {
                ...projetoAtual.personalizacao,
                [evento.target.name]: evento.target.value,
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
