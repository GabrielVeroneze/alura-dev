import { atom } from 'recoil'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { IProjeto } from '@/interfaces/IProjeto'

export const projetoAtualState = atom<IProjeto>({
    key: 'projetoAtualState',
    default: getProjetoDefault(),
})

export const projetoNodeState = atom<HTMLDivElement | null>({
    key: 'projetoNodeState',
    default: null,
})

export const menuAbertoState = atom<boolean>({
    key: 'menuAbertoState',
    default: false,
})
