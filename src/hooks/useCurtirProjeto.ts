import { useState } from 'react'
import { useManipularProjetos } from '@/hooks/useManipularProjetos'
import { IProjeto } from '@/interfaces/IProjeto'

export const useCurtirProjeto = () => {
    const { editarProjeto } = useManipularProjetos()
    const [projetoCurtido, setProjetoCurtido] = useState<boolean>(false)

    const curtirProjeto = (projeto: IProjeto) => {
        setProjetoCurtido(!projetoCurtido)

        if (projetoCurtido) {
            projeto.quantidadeCurtidas -= 1
        } else {
            projeto.quantidadeCurtidas += 1
        }

        editarProjeto(projeto)
    }

    return {
        projetoCurtido,
        curtirProjeto,
    }
}
