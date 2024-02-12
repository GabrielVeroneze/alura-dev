import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
import { projetoAtualState } from '@/state/atom'
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
            setProjetoAtual({
                id: '',
                nome: '',
                descricao: '',
                codigo: '',
                personalizacao: {
                    linguagem: 'javascript',
                    corFundo: '#6BD1FF',
                },
                curtidas: {
                    quantidade: 0,
                    curtido: false,
                },
                comentarios: {
                    quantidade: 0,
                },
            })
        }
    }, [id, setProjetoAtual])

    return {
        projetoAtual,
        setProjetoAtual,
    }
}
