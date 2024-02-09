import { useEffect, useState } from 'react'
import { IProjeto } from '@/interfaces/IProjeto'
import http from '@/http'

export const useBuscarProjetos = () => {
    const [projetos, setProjetos] = useState<IProjeto[]>([])

    useEffect(() => {
        carregarProjetos()
    }, [])

    const carregarProjetos = () => {
        http
            .get<IProjeto[]>('projetos')
            .then(resposta => {
                setProjetos(resposta.data)
            })
    }

    const cadastrarProjeto = (projeto: IProjeto) => {
        http
            .post('projetos', projeto)
            .then(() => {
                alert('Projeto cadastrado com sucesso!')
            })
    }

    const editarProjeto = (projeto: IProjeto) => {
        http
            .put(`projetos/${projeto.id}`, projeto)
            .then(() => {
                alert('Projeto atualizado com sucesso!')
            })
    }

    return {
        projetos,
        cadastrarProjeto,
        editarProjeto,
    }
}
