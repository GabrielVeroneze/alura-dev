import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { projetoNodeState } from '@/state/atom'
import DomToImage from 'dom-to-image'

export const useCodigoEmImagem = () => {
    const [projetoNode, setProjetoNode] = useRecoilState(projetoNodeState)
    const projetoRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (projetoRef.current) {
            setProjetoNode(projetoRef.current)
        }
    }, [setProjetoNode])

    const converterCodigo = (formato: string) => {
    }

    return {
        converterCodigo,
        projetoRef,
    }
}
