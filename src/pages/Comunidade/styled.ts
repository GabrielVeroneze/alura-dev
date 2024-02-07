import { ResponsiveMasonry } from 'react-responsive-masonry'
import styled from 'styled-components'

export const Projetos = styled(ResponsiveMasonry).attrs({
    columnsCountBreakPoints: { 0: 1, 1439: 2 },
})``
