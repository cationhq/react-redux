import styled from 'styled-components'
import { Card } from './card'

const StyleSoma = styled.div`
    
`

export const Soma = props => {
    const [min, max] = props.min_max
    return (
        <Card color="purple">
            <h1 id="header">Soma dos Números</h1>
            <StyleSoma>
                <span>Resultado: </span>
                <strong>{(min + max)}</strong>
            </StyleSoma>
        </Card>
    )
}