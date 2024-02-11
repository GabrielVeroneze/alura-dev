import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'

export interface IProjeto {
    id: string
    nome: string
    descricao: string
    codigo: string
    personalizacao: IPersonalizarEditor
    curtidas: {
        quantidade: number
        curtido: boolean
    }
    comentarios: {
        quantidade: number
    }
}
