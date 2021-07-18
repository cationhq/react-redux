import styled from 'styled-components'
import { Card } from './card'

const StyleMedia = styled.div`
    
`

export const Media = props => {
    const [min, max] = props.min_max

    return (
        <Card color="blue">
            <h1 id="header">Média dos Números</h1>
            <StyleMedia>
                <span>Resultado: </span>
                <strong>{(min + max) / 2}</strong>
            </StyleMedia>
        </Card>
    )
}