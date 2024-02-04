import { atom } from 'recoil'
import { IPersonalizarEditor } from '@/interfaces/IPersonalizarEditor'

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
