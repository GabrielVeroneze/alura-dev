import { useRecoilState } from 'recoil'
import { personalizarEditorState } from '@/state/atom'

export const usePersonalizarEditor = () => {
    const [personalizacao, setPersonalizacao] = useRecoilState(personalizarEditorState)

    return {
        personalizacao,
        setPersonalizacao,
    }
}
