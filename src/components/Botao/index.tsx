import { Button } from './styled'

interface BotaoProps {
    children: string
    type: 'button' | 'reset' | 'submit'
}

const Botao = ({ children, type }: BotaoProps) => {
    return (
        <Button type={type}>{children}</Button>
    )
}

export default Botao
