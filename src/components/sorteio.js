import styled from 'styled-components'
import { Card } from './card'

const StyleSorteio = styled.div`
    
`

export const Sorteio = props => {
    const [min, max] = props.min_max

    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <Card color="green">
            <h1 id="header">Sorteio de um Número</h1>
            <StyleSorteio>
                <span>Resultado: </span>
                <strong>{aleatorio}</strong>
            </StyleSorteio>
        </Card>
    )
}