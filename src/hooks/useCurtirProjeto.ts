import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { Projeto } from '@/types/Projeto'

export const useCurtirProjeto = () => {
    const { editarProjeto, carregarProjetos } = useManipularProjetos()

    const curtirProjeto = (projeto: Projeto) => {
        if (projeto.curtidas.curtido) {
            projeto.curtidas.quantidade -= 1
        } else {
            projeto.curtidas.quantidade += 1
        }

        projeto.curtidas.curtido = !projeto.curtidas.curtido

        editarProjeto(projeto)
        carregarProjetos()
    }

    return {
        curtirProjeto,
    }
}
