import { atom } from 'recoil'
import { IProjeto } from '@/interfaces/IProjeto'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'

export const projetoAtualState = atom<IProjeto>({
    key: 'projetoAtualState',
    default: {
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
    },
})

export const menuAbertoState = atom<boolean>({
    key: 'menuAbertoState',
    default: false,
})

export const personalizarEditorState = atom<IPersonalizarEditor>({
    key: 'personalizarEditorState',
    default: {
        linguagem: 'javascript',
        corFundo: '#6BD1FF',
    },
})
