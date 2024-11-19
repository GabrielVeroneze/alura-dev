import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
import { projetoAtualState } from '@/state/atom'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { IProjeto } from '@/interfaces/IProjeto'
import api from '@/services/api'

export const useProjetoAtual = () => {
    const { id } = useParams()
    const [projetoAtual, setProjetoAtual] = useRecoilState(projetoAtualState)

    useEffect(() => {
        if (id) {
            api
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
