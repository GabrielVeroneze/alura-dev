import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { saveAs } from 'file-saver'
import { projetoNodeState } from '@/state/atom'
import { exibirMensagem } from '@/utils/mensagemAlerta'
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
        if (projetoNode) {
            switch (formato) {
                case 'png':
                    DomToImage.toPng(projetoNode)
                        .then(dataUrl => {
                            saveAs(dataUrl, 'projeto.png')
                        })
                        .catch(() => {
                            exibirMensagem('Erro ao transformar em imagem.', 'error')
                        })
                    break
                case 'jpg':
                    DomToImage.toJpeg(projetoNode)
                        .then(dataUrl => {
                            saveAs(dataUrl, 'projeto.jpg')
                        })
                        .catch(() => {
                            exibirMensagem('Erro ao transformar em imagem.', 'error')
                        })
                    break
                case 'svg':
                    DomToImage.toSvg(projetoNode)
                        .then(dataUrl => {
                            saveAs(dataUrl, 'projeto.svg')
                        })
                        .catch(() => {
                            exibirMensagem('Erro ao transformar em imagem.', 'error')
                        })
                    break
            }
        }
    }

    return {
        converterCodigo,
        projetoRef,
    }
}
