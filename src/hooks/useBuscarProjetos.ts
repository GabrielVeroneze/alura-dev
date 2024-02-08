import { useCallback, useEffect, useState } from 'react'
import { IProjeto } from '@/interfaces/IProjeto'
import http from '@/http'

export const useBuscarProjetos = () => {
    const [projetos, setProjetos] = useState<IProjeto[]>([])
    const [projeto, setProjeto] = useState<IProjeto | null>(null)

    useEffect(() => {
        http.get<IProjeto[]>('projetos')
            .then(resposta => {
                setProjetos(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    const buscarProjeto = useCallback((id: string) => {
        http.get<IProjeto>(`projetos/${id}`)
            .then(resposta => {
                setProjeto(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return {
        projetos,
        projeto,
        setProjeto,
        buscarProjeto,
    }
}
