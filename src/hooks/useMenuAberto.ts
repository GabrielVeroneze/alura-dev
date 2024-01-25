import { useRecoilState } from 'recoil'
import { menuAbertoState } from '@/state/atom'

export const useMenuAberto = () => {
    const [menuAberto, setMenuAberto] = useRecoilState(menuAbertoState)

    return {
        menuAberto,
        setMenuAberto,
    }
}
