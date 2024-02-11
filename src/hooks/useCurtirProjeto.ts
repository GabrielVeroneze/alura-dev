import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { IProjeto } from '@/interfaces/IProjeto'

export const useCurtirProjeto = () => {
    const { editarProjeto, carregarProjetos } = useManipularProjetos()

    const curtirProjeto = (projeto: IProjeto) => {
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
