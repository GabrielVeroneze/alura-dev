import { Projeto } from '@/types/Projeto'
import api from '@/services/api'

export async function buscarProjetos(): Promise<Projeto[]> {
    try {
        const resposta = await api.get<Projeto[]>('projetos')
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os projetos.')
    }
}

export async function buscarProjetoPorId(id: string): Promise<Projeto> {
    try {
        const resposta = await api.get<Projeto>(`projetos/${id}`)
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar o projeto.')
    }
}

export async function criarProjeto(projeto: Projeto): Promise<void> {
    try {
        await api.post<Projeto>('projetos', projeto)
    } catch {
        throw new Error('Erro ao cadastrar o projeto.')
    }
}

export async function atualizarProjeto(projeto: Projeto): Promise<void> {
    try {
        await api.put<Projeto>(`projetos/${projeto.id}`, projeto)
    } catch {
        throw new Error('Erro ao editar o projeto.')
    }
}
