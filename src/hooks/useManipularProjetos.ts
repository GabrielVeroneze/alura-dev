import { useEffect, useState } from 'react'
import { atualizarProjeto, buscarProjetos, criarProjeto } from '@/services/projetos'
import { exibirMensagem } from '@/utils/mensagemAlerta'
import { IProjeto } from '@/interfaces/IProjeto'

export const useManipularProjetos = (carregarInicialmente = true) => {
    const [projetos, setProjetos] = useState<IProjeto[]>([])

    useEffect(() => {
        if (carregarInicialmente) {
            carregarProjetos()
        }
    }, [carregarInicialmente])

    const carregarProjetos = async () => {
        try {
            const projetosCarregados = await buscarProjetos()

            setProjetos(projetosCarregados)
        } catch (erro) {
            console.log(erro)
        }
    }

    const cadastrarProjeto = async (projeto: IProjeto) => {
        try {
            await criarProjeto(projeto)

            exibirMensagem('Projeto adicionado com sucesso!', 'success')
        } catch (erro) {
            if (erro instanceof Error) {
                exibirMensagem(erro.message, 'error')
            }
        }
    }

    const editarProjeto = async (projeto: IProjeto) => {
        try {
            await atualizarProjeto(projeto)

            exibirMensagem('Projeto atualizado com sucesso!', 'success')
        } catch (erro) {
            if (erro instanceof Error) {
                exibirMensagem(erro.message, 'error')
            }
        }
    }

    return {
        projetos,
        carregarProjetos,
        cadastrarProjeto,
        editarProjeto,
    }
}
