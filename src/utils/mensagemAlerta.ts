import { toast } from 'react-toastify'

export const exibirMensagem = (mensagem: string, tipo: 'success' | 'error') => {
    toast[tipo](mensagem, {
        position: 'bottom-right',
        theme: 'colored',
    })
}
