import { useEffect, useState } from 'react'
import { exibirMensagem } from '@/utils/mensagemAlerta'
import { IProjeto } from '@/interfaces/IProjeto'
import api from '@/services/api'

export const useManipularProjetos = () => {
    const [projetos, setProjetos] = useState<IProjeto[]>([])

    useEffect(() => {
        carregarProjetos()
    }, [])

    const carregarProjetos = () => {
        api
            .get<IProjeto[]>('projetos')
            .then(resposta => {
                setProjetos(resposta.data)
            })
    }

    const cadastrarProjeto = (projeto: IProjeto) => {
        api
            .post('projetos', projeto)
            .then(() => {
                exibirMensagem('Projeto adicionado com sucesso!', 'success')
            })
            .catch(() => {
                exibirMensagem('Erro ao cadastrar o projeto.', 'error')
            })
    }

    const editarProjeto = (projeto: IProjeto) => {
        api
            .put(`projetos/${projeto.id}`, projeto)
            .then(() => {
                exibirMensagem('Projeto atualizado com sucesso!', 'success')
            })
            .catch(() => {
                exibirMensagem('Erro ao editar o projeto.', 'error')
            })
    }

    return {
        projetos,
        carregarProjetos,
        cadastrarProjeto,
        editarProjeto,
    }
}
