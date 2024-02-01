import { atom } from 'recoil'

export const menuAbertoState = atom<boolean>({
    key: 'menuAbertoState',
    default: false,
})

export const linguagemHighlightState = atom<string>({
    key: 'linguagemHighlightState',
    default: 'javascript',
})
