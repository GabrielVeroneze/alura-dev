import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
import { projetoAtualState } from '@/state/atom'
import { buscarProjetoPorId } from '@/services/projetos'
import { getProjetoDefault } from '@/utils/projetoDefault'

export const useProjetoAtual = () => {
    const { id } = useParams()
    const [projetoAtual, setProjetoAtual] = useRecoilState(projetoAtualState)

    useEffect(() => {
        const carregarProjeto = async () => {
            if (id) {
                const resposta = await buscarProjetoPorId(id)
                setProjetoAtual(resposta)
            } else {
                setProjetoAtual(getProjetoDefault())
            }
        }

        carregarProjeto()
    }, [id, setProjetoAtual])

    return {
        projetoAtual,
        setProjetoAtual,
    }
}
