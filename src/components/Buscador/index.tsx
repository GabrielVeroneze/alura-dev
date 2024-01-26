import { useState } from 'react'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CampoBusca, IconeLupa, Input } from './styled'
import IconButton from '@/components/IconButton'

const Buscador = () => {
    const [buscaAberta, setBuscaAberta] = useState<boolean>(false)

    const alternarbuscaAberta = () => {
        setBuscaAberta(!buscaAberta)
    }

    return (
        <CampoBusca $buscaAberta={buscaAberta}>
            <Input placeholder="Busque por algo" $buscaAberta={buscaAberta} />
            {buscaAberta ? (
                <IconButton icone={faXmark} onClick={alternarbuscaAberta} />
            ) : (
                <IconeLupa>
                    <IconButton icone={faMagnifyingGlass} onClick={alternarbuscaAberta} />
                </IconeLupa>
            )}
        </CampoBusca>
    )
}

export default Buscador
