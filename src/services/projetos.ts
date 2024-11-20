import { IProjeto } from '@/interfaces/IProjeto'
import api from './api'

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
        const resposta = await api.post<IProjeto>('projetos', projeto)

        return resposta.status
    } catch {
        throw new Error('Erro ao cadastrar o projeto.')
    }
}

export async function atualizarProjeto(projeto: IProjeto) {
    try {
        const resposta = await api.put<IProjeto>(`projetos/${projeto.id}`, projeto)

        return resposta.status
    } catch {
        throw new Error('Erro ao editar o projeto.')
    }
}
