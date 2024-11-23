import { Projeto } from '@/types/Projeto'

export const getProjetoDefault = (): Projeto => ({
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
