import { useProjetoAtual } from '@/hooks/useProjetoAtual'
import { useManipularProjetos } from '@/hooks/useManipularProjetos'

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

        setProjetoAtual({
            id: '',
            nome: '',
            descricao: '',
            codigo: '',
            personalizacao: {
                linguagem: 'javascript',
                corFundo: '#6BD1FF',
            },
            curtidas: {
                quantidade: 0,
                curtido: false,
            },
            comentarios: {
                quantidade: 0,
            },
        })
    }

    return {
        handleDadosChange,
        handlePersonalizarChange,
        handleFormularioSubmit,
    }
}
