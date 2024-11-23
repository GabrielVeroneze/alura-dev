import { atom } from 'recoil'
import { getProjetoDefault } from '@/utils/projetoDefault'
import { Projeto } from '@/types/Projeto'

export const projetoAtualState = atom<Projeto>({
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
