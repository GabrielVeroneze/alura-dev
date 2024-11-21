import { IProjeto } from '@/interfaces/IProjeto'
import api from '@/services/api'

export async function buscarProjetos() {
    try {
        const resposta = await api.get<IProjeto[]>('projetos')
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os projetos.')
    }
}

export async function criarProjeto(projeto: IProjeto) {
    try {
        await api.post<IProjeto>('projetos', projeto)
    } catch {
        throw new Error('Erro ao cadastrar o projeto.')
    }
}

export async function atualizarProjeto(projeto: IProjeto) {
    try {
        await api.put<IProjeto>(`projetos/${projeto.id}`, projeto)
    } catch {
        throw new Error('Erro ao editar o projeto.')
    }
}
