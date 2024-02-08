import http from '@/http'
import { IProjeto } from '@/interfaces/IProjeto'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePersonalizarEditor } from './usePersonalizarEditor'

export const useProjetoDaRota = () => {
    const { id } = useParams()
    const { personalizacao } = usePersonalizarEditor()

    const projetoPadrao: IProjeto = useMemo(() => ({
        id: '',
        nome: '',
        descricao: '',
        codigo: '',
        personalizacao: personalizacao,
    }), [personalizacao])

    const [projeto, setProjeto] = useState<IProjeto>(projetoPadrao)

    useEffect(() => {
        if (id) {
            console.log('A rota possuí id!')
            http.get<IProjeto>(`projetos/${id}`)
                .then((resposta) => {
                    setProjeto(resposta.data)
                })
        } else {
            console.log('A rota não possuí id!')
            setProjeto(projetoPadrao)
        }
    }, [id, projetoPadrao])

    return {
        projeto,
    }
}
