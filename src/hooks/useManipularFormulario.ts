import { useProjetoAtual } from '@/hooks/useProjetoAtual'

export const useManipularFormulario = () => {
    const { projetoAtual, setProjetoAtual } = useProjetoAtual()

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
    }

    return {
        handleDadosChange,
        handlePersonalizarChange,
        handleFormularioSubmit,
    }
}
