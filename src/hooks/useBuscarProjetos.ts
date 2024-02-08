import { useEffect, useState } from 'react'
import { IProjeto } from '@/interfaces/IProjeto'
import http from '@/http'

export const useBuscarProjetos = () => {
    const [projetos, setProjetos] = useState<IProjeto[]>([])

    useEffect(() => {
        http.get<IProjeto[]>('projetos')
            .then(resposta => {
                setProjetos(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return {
        projetos,
    }
}
