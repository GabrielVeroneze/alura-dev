import { useRecoilState } from 'recoil'
import { linguagemHighlightState } from '@/state/atom'

export const useLinguagemHighlight = () => {
    const listaLinguagens = [
        {
            nome: 'C',
            valor: 'c',
        },
        {
            nome: 'C++',
            valor: 'cpp',
        },
        {
            nome: 'C#',
            valor: 'csharp',
        },
        {
            nome: 'CSS',
            valor: 'css',
        },
        {
            nome: 'Go',
            valor: 'go',
        },
        {
            nome: 'HTML',
            valor: 'html',
        },
        {
            nome: 'Java',
            valor: 'java',
        },
        {
            nome: 'JavaScript',
            valor: 'javascript',
        },
        {
            nome: 'JSON',
            valor: 'json',
        },
        {
            nome: 'PHP',
            valor: 'php',
        },
        {
            nome: 'Python',
            valor: 'python',
        },
        {
            nome: 'Ruby',
            valor: 'ruby',
        },
        {
            nome: 'Swift',
            valor: 'swift',
        },
    ]

    const [linguagemSelecionada, setLinguagemSelecionada] = useRecoilState(linguagemHighlightState)

    return {
        listaLinguagens,
        linguagemSelecionada,
        setLinguagemSelecionada,
    }
}
