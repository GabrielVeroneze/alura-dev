import { atom } from 'recoil'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { IProjeto } from '@/interfaces/IProjeto'

export const projetoAtualState = atom<IProjeto>({
    key: 'projetoAtualState',
    default: getProjetoDefault(),
})

export const menuAbertoState = atom<boolean>({
    key: 'menuAbertoState',
    default: false,
})
