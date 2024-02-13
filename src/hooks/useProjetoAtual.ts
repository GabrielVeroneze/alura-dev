import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
import { projetoAtualState } from '@/state/atom'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { IProjeto } from '@/interfaces/IProjeto'
import http from '@/http'

export const useProjetoAtual = () => {
    const { id } = useParams()
    const [projetoAtual, setProjetoAtual] = useRecoilState(projetoAtualState)

    useEffect(() => {
        if (id) {
            http
                .get<IProjeto>(`projetos/${id}`)
                .then(resposta => {
                    setProjetoAtual(resposta.data)
                })
        } else {
            setProjetoAtual(getProjetoDefault())
        }
    }, [id, setProjetoAtual])

    return {
        projetoAtual,
        setProjetoAtual,
    }
}
