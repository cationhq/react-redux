import styled from 'styled-components'
import { Card } from './card'

const StyleSorteio = styled.div`
    
`

export const Sorteio = props => (
    <Card color="green">
        <h1 id="header">Sorteio de um Número</h1>
        <StyleSorteio>
            <span>Resultado: </span>
            <strong>7</strong>
        </StyleSorteio>
    </Card>
)