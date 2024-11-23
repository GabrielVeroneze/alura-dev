import { PersonalizarEditor } from '@/types/PersonalizarEditor'

export interface Projeto {
    id: string
    nome: string
    descricao: string
    codigo: string
    personalizacao: PersonalizarEditor
    curtidas: {
        quantidade: number
        curtido: boolean
    }
    comentarios: {
        quantidade: number
    }
}
