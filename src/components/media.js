import styled from 'styled-components'
import { Card } from './card'

const StyleMedia = styled.div`
    
`

export const Media = props => (
    <Card color="blue">
        <h1 id="header">Média dos Números</h1>
        <StyleMedia>
            <span>Resultado: </span>
            <strong> 5</strong>
        </StyleMedia>
    </Card>
)